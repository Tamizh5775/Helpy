// src/components/ui/card.jsx
import React from "react";

export function Card({ children, className, onClick }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
