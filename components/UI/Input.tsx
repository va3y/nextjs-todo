import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, className, ...nativeAttrs }: InputProps) {
  return (
    <div className={className + " relative"}>
      <input
        {...nativeAttrs}
        className="peer h-10 w-full border-b-2 border-gray-300 placeholder-transparent focus:outline-none focus:border-lime-300 bg-transparent"
      />
      <label
        htmlFor={nativeAttrs.id}
        className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-lime-300 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
}
