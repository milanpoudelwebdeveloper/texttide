import React from "react";

interface InputProps {
  label: string;
  name: string;
  type: string;
  className: string;
  inputClassName?: string;
  isRequired: boolean;
  placeholder: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label = "",
  name = "",
  type = "text",
  className = "",
  inputClassName = "",
  isRequired = true,
  placeholder = "",
  value = "",
  onChange = () => {},
}: InputProps) => {
  return (
    <div className={`${className}`}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-800">
        {label}
      </label>
      <input
        type={type}
        id={name}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${inputClassName}`}
        placeholder={placeholder}
        required={isRequired}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
