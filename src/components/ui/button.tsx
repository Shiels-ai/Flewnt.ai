import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary";
  children: React.ReactNode;
}

const baseStyles =
  "px-5 py-2 rounded-2xl font-lato font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

const variants = {
  default:
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-400",
  outline:
    "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400 dark:border-slate-600 dark:text-gray-200 dark:hover:bg-slate-800",
  secondary:
    "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 dark:bg-slate-700 dark:text-gray-100 dark:hover:bg-slate-600",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
