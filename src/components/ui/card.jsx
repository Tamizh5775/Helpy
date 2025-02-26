import React from "react";
import clsx from "clsx"; // Helps merge classes dynamically

export function Card({ children, className = "", onClick, ...props }) {
  const handleKeyDown = (event) => {
    if (onClick && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={clsx(
        "bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 focus:ring focus:ring-blue-300",
        className
      )}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={onClick ? "Card - Click to view details" : undefined}
      {...props}
    >
      {children}
    </div>
  );
}
