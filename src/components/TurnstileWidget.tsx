import { $currentTheme } from "@/store";
import { Turnstile } from "@marsidev/react-turnstile";
import { useStore } from "@nanostores/react";
import type { FC } from "react";

interface Props {
  onSuccess?: (token: string) => void;
}

const TurnstileWidget: FC<Props> = ({ onSuccess }) => {
  const currentTheme = useStore($currentTheme);
  return (
    <Turnstile
      siteKey={import.meta.env.PUBLIC_TURNSTILE_SITE_KEY}
      options={{ theme: currentTheme, size: "flexible" }}
      onSuccess={onSuccess}
    />
  );
};

export default TurnstileWidget;
