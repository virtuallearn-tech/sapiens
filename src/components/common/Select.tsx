import React from "react";

interface IOption {
  value: string;
  label: string;
  start?: number | string;
}

interface ISelect {
  id: string;
  label: string;
  options: IOption[];
  value: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({ id, label, options, value, onChange, disabled = false }: ISelect) => {
  return (
    <div className="m-select">
      <label htmlFor={id} className="m-select__label">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="m-select__field"
      >
        <option value="" disabled>Selecione</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
