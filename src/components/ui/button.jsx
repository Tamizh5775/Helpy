import React from "react";

export function Button({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-white transition-colors 
        ${
          disabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        } 
        focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
