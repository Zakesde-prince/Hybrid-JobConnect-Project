import React from "react";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
