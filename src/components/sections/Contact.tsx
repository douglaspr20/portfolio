import { personalInfo } from "@/lib/data";
import { Card, CardContent } from "../ui/Card";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";
import { ArrowRight, Clock, MapPin, Phone, Mail } from "lucide-react";
import { TypingAnimation } from "../common/TypingAnimation";
import SectionContainer from "../common/SectionContainer";

const Contact = () => {
  const titles = [
    "Let's work together",
    "Contact me",
    "Get in touch",
    "Start your project",
    "Say hello",
  ];

  const contactsMethods = [
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      backgroundGradientIcon: "from-blue-500 to-blue-600",
      title: "Email",
      description: personalInfo.email,
    },
    {
      icon: <Phone className="h-6 w-6 text-white" />,
      backgroundGradientIcon: "from-yellow-500 to-yellow-600",
      title: "Phone",
      description: personalInfo.phoneNumber,
    },
    {
      icon: <MapPin className="h-6 w-6 text-white" />,
      backgroundGradientIcon: "from-sky-500 to-sky-600",
      title: "Location",
      description: personalInfo.location,
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      backgroundGradientIcon: "from-amber-500 to-amber-600",
      title: "Hours",
      description: "Mon - Fri: 9 AM - 6 PM",
    },
  ];

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
        <Card className="shadow-lg backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/50">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name">Name</label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="mt-1 border-gray-500/25 placeholder:text-gray-400 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="mt-1 border-gray-500/25 placeholder:text-gray-400 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message">Message</label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  className="mt-1 min-h-[120px] resize-none border-gray-500/25 placeholder:text-gray-400 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white"
                />
              </div>

              <Button className="w-full transform rounded-2xl border-0 bg-gradient-to-r from-blue-700 to-sky-950 px-10 py-4 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25 hover:brightness-125">
                Send message
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <h3 className="mb-4 text-2xl font-bold dark:text-white">
            Let's talk!
          </h3>
          <p className="mb-8 text-gray-700 dark:text-gray-300">
            I'm available for new projects and collaborations. Don't hesitate to
            reach out to discuss your ideas.
          </p>

          <div className="space-y-6">
            {contactsMethods.map((method) => (
              <Card
                key={method.title}
                className="group flex cursor-pointer flex-col items-center justify-center bg-gradient-to-r p-4 transition-colors group-hover:scale-110 hover:brightness-90 md:flex-row md:space-x-4 dark:border-transparent dark:from-slate-950 dark:to-slate-800 dark:shadow-slate-600 dark:hover:brightness-125"
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
