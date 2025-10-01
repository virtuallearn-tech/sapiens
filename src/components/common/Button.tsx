import React from "react";

type ButtonType = "primary" | "secondary" | "clear" | "dark" | "outline";

interface IButton {
  typeBtn?: ButtonType,
  onClick?: Function,
  disabled?:boolean,
  className?:string,
  type?: "button" | "submit",
  children: React.ReactNode
}

export const Button = ({ type="button" ,typeBtn = "primary", onClick, disabled = false, className="", children }: IButton) => {
  return (
    <button type={type} disabled={disabled} className={`m-button m-button--${typeBtn} ${className}`} onClick={() => onClick!()}>
      {children}
    </button>
  );
}
