import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  withArrow?: boolean;
  size?: "fit" | "normal";
  variant?: "normal" | "outline";
  className?: string;
  rotateIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "normal",
  size = "normal",
  rotateIcon = false,
  withArrow = false,
  className,
  ...props
}) => {
  const baseClasses =
    "bg-purple-100 border border-purple-100 text-white font-medium rounded-3xl h-[50px] px-[24px] flex items-center justify-center !w-full leading-6 my-[10px] gap-2 disabled:bg-[#323232] disabled:border-[#323232] disabled:text-[#7e7e7e] whitespace-nowrap";

  const outlineClasses = "border-[#EAD6FF] bg-transparent text-[#EAD6FF]";

  const sizeClass = size === "fit" ? "!w-fit" : "";

  return (
    <button
      className={twMerge(
        baseClasses,
        variant === "outline" && outlineClasses,
        sizeClass,
        className
      )}
      {...props}
    >
      {text}
      {withArrow && (
        <FaArrowRightLong className={rotateIcon ? "-rotate-45" : ""} />
      )}
    </button>
  );
};

export default Button;
