import { $currentTheme } from "@/store";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useStore } from "@nanostores/react";
import { useEffect, useRef, useState, type FC } from "react";

interface Props {
  onSuccess?: (token: string) => void;
  currentLang: string;
  currentContainerWidth?: number;
}

const TurnstileWidget: FC<Props> = ({
  onSuccess,
  currentLang,
  currentContainerWidth,
}) => {
  const ref = useRef<TurnstileInstance | null>(null);
  const currentTheme = useStore($currentTheme);
  const [useCompactSize, setCompactSize] = useState(false);

  useEffect(() => {
    console.log("window?.screen?.width", currentContainerWidth);
    if (currentContainerWidth < 300) {
      return setCompactSize(true);
    }

    setCompactSize(false);
  }, [currentContainerWidth]);

  return (
    <Turnstile
      ref={ref}
      siteKey={import.meta.env.PUBLIC_TURNSTILE_SITE_KEY}
      options={{
        theme: currentTheme,
        size: useCompactSize ? "compact" : "flexible",
        refreshExpired: "manual",
        language: currentLang,
      }}
      onSuccess={onSuccess}
      onExpire={() => {
        if (ref.current) {
          ref.current.reset();
        }
      }}
      className="w-2"
    />
  );
};

export default TurnstileWidget;
