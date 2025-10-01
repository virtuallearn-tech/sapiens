import React from "react";

interface IOption {
  value: string;
  label: string;
}

interface ISelect {
  id: string;
  label: string;
  options: IOption[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({ id, label, options, value, onChange }: ISelect) => {
  return (
    <div className="m-select">
      <label htmlFor={id} className="m-select__label">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="m-select__field"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
