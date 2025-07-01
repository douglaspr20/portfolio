import { $currentTheme } from "@/store";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useStore } from "@nanostores/react";
import { useRef, type FC } from "react";

interface Props {
  onSuccess?: (token: string) => void;
}

const TurnstileWidget: FC<Props> = ({ onSuccess }) => {
  const ref = useRef<TurnstileInstance | null>(null);
  const currentTheme = useStore($currentTheme);
  return (
    <Turnstile
      ref={ref}
      siteKey={import.meta.env.PUBLIC_TURNSTILE_SITE_KEY}
      options={{
        theme: currentTheme,
        size: "flexible",
        refreshExpired: "manual",
      }}
      onSuccess={onSuccess}
      onExpire={() => {
        if (ref.current) {
          ref.current.reset();
        }
      }}
    />
  );
};

export default TurnstileWidget;
