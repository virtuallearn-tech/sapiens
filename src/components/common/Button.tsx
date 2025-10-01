import React from "react";

type ButtonType = "primary" | "secondary" | "clear" | "dark" | "outline";

export const  Button = ({ type = "primary", children }: { type?: ButtonType; children: React.ReactNode }) => {
  return (
    <button className={`m-button m-button--${type}`}>
      {children}
    </button>
  );
}
