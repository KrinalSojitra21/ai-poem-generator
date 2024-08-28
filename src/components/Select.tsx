// @/components/ui/select.tsx
import React from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  placeholder: string;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  placeholder,
  className,
  ...props
}) => {
  return (
    <select
      className={`w-full p-2 rounded-md bg-purple-500 text-white placeholder-purple-200 ${className}`}
      {...props}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-white text-purple-600 font-bold hover:bg-purple-100 transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
