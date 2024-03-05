"use client";

import { FC } from "react";

interface SelectProps extends React.ComponentPropsWithoutRef<"select"> {
  options: string[];
  onValueChange: (value: string) => void;
  placeholder?: string;
}

export const Select: FC<SelectProps> = (props: SelectProps) => {
  const {
    options,
    onValueChange,
    placeholder = "",
    className = "",
    ...selectProps
  } = props;

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onValueChange(value);
  };

  return (
    <select
      className={`bg-white rounded-md py-2 px-4 text-sm outline-none ring-2 ring-gray-100 focus-visible:ring-4 focus-visible:ring-primary-light ${className}`}
      onChange={handleSelectChange}
      {...selectProps}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
