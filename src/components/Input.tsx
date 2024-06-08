import React from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  name: string;
  label?: string;
  type: string;
  className: string;
  inputClassName?: string;
  placeholder: string;
  register: UseFormRegister<any>;
}

const Input = ({
  name,
  label = "",
  type = "text",
  className = "",
  inputClassName = "",
  placeholder = "",
  register,
}: InputProps) => {
  return (
    <div className={`${className}`}>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-800"
      >
        {label}
      </label>
      <input
        {...register(name)}
        type={type}
        id={name}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${inputClassName}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
