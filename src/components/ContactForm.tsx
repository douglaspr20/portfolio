import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { useState, type FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getContactSchema, type ContactFormData } from "@/lib";
import type { Language } from "@/types";
import { ui } from "@/i18n";
import { Toast } from "@/components/ui/Toast";
import TurnstileWidget from "./TurnstileWidget";

interface Props {
  currentLang: Language;
}

const ContactForm: FC<Props> = ({ currentLang }) => {
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const t = ui[currentLang];
  const schema = getContactSchema(currentLang);

  const { inputs, submitButton } = t.contact;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  const handleSuccess = (token: string) => {
    setValue("turnstileToken", token, {
      shouldValidate: true,
    });
  };

  const onSubmit = async (data: ContactFormData) => {
    const { name, email, message, turnstileToken } = data;
    try {
      const resVerify = await fetch("/api/verify", {
        method: "POST",
        body: JSON.stringify({ token: turnstileToken }),
      });

      if (!resVerify.ok) {
        setToast({
          message: "Error de verificación. Inténtalo de nuevo.",
          type: "error",
        });
        return;
      }
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error();
      setToast({ message: "¡Mensaje enviado con éxito!", type: "success" });
      reset();
    } catch {
      setToast({ message: "Error al enviar el mensaje.", type: "error" });
    }
  };

  return (
    <>
      <Card className="shadow-lg backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/50">
        <CardContent className="p-8">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <label htmlFor="name">{inputs.name.label}</label>
              <Input
                id="name"
                placeholder={inputs.name.placeholder}
                className="mt-1 border-gray-500/25 placeholder:text-gray-400 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white"
                {...register("name")}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message || inputs.name.errors.required}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email">{inputs.email.label}</label>
              <Input
                id="email"
                type="email"
                placeholder={inputs.email.placeholder}
                className="mt-1 border-gray-500/25 placeholder:text-gray-400 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message || inputs.email.errors.required}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="message">{inputs.message.label}</label>
              <Textarea
                id="message"
                placeholder={inputs.message.placeholder}
                className="mt-1 min-h-[120px] resize-none border-gray-500/25 placeholder:text-gray-400 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white"
                {...register("message")}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message || inputs.message.errors.required}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <TurnstileWidget onSuccess={handleSuccess} />
              {errors.turnstileToken && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.turnstileToken.message ||
                    "Please complete the captcha."}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full transform rounded-2xl border-0 bg-gradient-to-r from-blue-700 to-sky-950 px-10 py-4 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25 hover:brightness-125"
            >
              {submitButton}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </CardContent>
      </Card>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
};

export default ContactForm;
