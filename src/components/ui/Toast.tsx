import { cn } from "@/lib";
import { BadgeAlert, BadgeCheck, X } from "lucide-react";
import { useEffect } from "react";

export const Toast = ({
  message,
  type,
  onClose,
}: {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const toastId = `toast-${type}`;

  const icon =
    type === "success" ? (
      <BadgeCheck className="h-5 w-5" aria-hidden="true" />
    ) : (
      <BadgeAlert className="h-5 w-5" aria-hidden="true" />
    );

  return (
    <div
      id={toastId}
      className="fixed right-6 bottom-6 z-50 mb-4 flex w-full max-w-xs transform items-center rounded-lg bg-white p-4 text-gray-500 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 dark:bg-gray-800 dark:text-gray-400"
      role="alert"
    >
      <div
        className={cn(
          "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
          type === "success"
            ? "bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200"
            : "bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200",
        )}
      >
        {icon}
        <span className="sr-only">
          {type === "success" ? "Check icon" : "Alert icon"}
        </span>
      </div>
      <div className="ms-3 text-sm font-normal">{message}</div>
      <button
        type="button"
        className="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
        data-dismiss-target={`#${toastId}`}
        aria-label="Close"
        onClick={onClose}
      >
        <span className="sr-only">Close</span>
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
};
