import React from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ label, className, ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-sm font-medium text-white">{label}</label>
      )}
      <input
        className={twMerge(
          "bg-transparent border border-neutral-700 text-white placeholder:text-neutral-500 rounded-xl px-4 py-3 outline-none focus:border-purple-100 transition-all",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default Input;
