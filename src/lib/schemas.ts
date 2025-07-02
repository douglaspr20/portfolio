import { ui } from "@/i18n";
import type { Language } from "@/types";
import { z } from "astro:schema";

export const getContactSchema = (lang: Language) => {
  const t = ui[lang];

  return z.object({
    name: z
      .string({ required_error: t.contact.inputs.name.errors.required })
      .min(2, t.contact.inputs.name.errors.minLength),
    email: z
      .string({ required_error: t.contact.inputs.email.errors.required })
      .email(t.contact.inputs.email.errors.invalid),
    message: z
      .string({ required_error: t.contact.inputs.message.errors.required })
      .min(10, t.contact.inputs.message.errors.minLength)
      .max(500, t.contact.inputs.message.errors.maxLength),
    turnstileToken: z.string({
      required_error: t.contact.inputs.turnstileToken.errors.required,
    }),
  });
};

export type ContactFormData = z.infer<ReturnType<typeof getContactSchema>>;
