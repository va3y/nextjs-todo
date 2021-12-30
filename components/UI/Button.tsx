import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ className, children, ...nativeAttrs }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 rounded bg-lime-800 hover:bg-lime-600 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 transition-colors focus:ring-lime-600 focus:ring-opacity-80 cursor-pointer ${className}`}
      {...nativeAttrs}
    >
      {children}
    </button>
  );
};
