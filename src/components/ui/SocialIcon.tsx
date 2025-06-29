import React from "react";

interface Props {
  link: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}

const SocialIcon = ({ link, label, children, className = "" }: Props) => {
  return (
    <a
      target="_blank"
      href={link}
      aria-label={label}
      className={`rounded-xl text-gray-400 transition duration-300 ease-in-out hover:scale-125 ${className}`}
    >
      {children}
    </a>
  );
};

export default SocialIcon;
