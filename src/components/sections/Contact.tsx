import { personalInfo } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { TypingAnimation } from "@/components/common/TypingAnimation";
import SectionContainer from "@/components/common/SectionContainer";
import type { Language } from "@/types";
import type { FC, JSX } from "react";
import { ui } from "@/i18n";
import ContactForm from "../ContactForm";

interface Props {
  currentLang: Language;
}

const Contact: FC<Props> = ({ currentLang }) => {
  const t = ui[currentLang];

  const { titles, description, letsTalk, contactsMethods } = t.contact;

  const contactsMethodsIcons: Record<string, JSX.Element> = {
    email: <Mail className="h-6 w-6 text-white" />,
    phone: <Phone className="h-6 w-6 text-white" />,
    location: <MapPin className="h-6 w-6 text-white" />,
    hours: <Clock className="h-6 w-6 text-white" />,
  };

  const contactsMethodsWithIcons = contactsMethods.map((method) => {
    const icon = contactsMethodsIcons[method.id];

    return {
      ...method,
      icon,
    };
  });

  return (
    <SectionContainer id="contact">
      <div className="mb-16">
        <h2 className="text-2xl font-bold sm:text-4xl">
          <TypingAnimation
            texts={titles}
            className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent"
          />
        </h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <ContactForm currentLang={currentLang} />

        <div className="space-y-8">
          <h3 className="mb-4 text-2xl font-bold dark:text-white">
            {letsTalk}
          </h3>
          <p className="mb-8 text-gray-700 dark:text-gray-300">{description}</p>

          <div className="space-y-6">
            {contactsMethodsWithIcons.map((method) => (
              <Card
                key={method.title}
                className="group flex cursor-pointer flex-col items-center justify-center bg-gradient-to-r p-4 transition-colors group-hover:scale-110 hover:brightness-90 md:flex-row md:justify-start md:space-x-4 dark:border-transparent dark:from-slate-950 dark:to-slate-800 dark:shadow-slate-600 dark:hover:brightness-125"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${method.backgroundGradientIcon} transition-transform group-hover:scale-110`}
                >
                  {method.icon}
                </div>
                <div className="text-center md:text-start">
                  <h4 className="font-semibold">{method.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {method.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
