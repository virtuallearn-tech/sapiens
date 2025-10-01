import React from "react";

interface IInput {
  id: string;
  name:string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  id,
  name,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: IInput) => {
  return (
    <div className="m-input">
      <label htmlFor={id} className="m-input__label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="m-input__field"
      />
    </div>
  );
};
