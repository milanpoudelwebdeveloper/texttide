import React from "react";

interface ButtonProps {
  label: string;
  type: "button" | "submit" | "reset";
  className: string;
  disabled?: boolean;
}

const Button = ({
  label = "Button",
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`bg-primary text-white hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
