"use client";

import { FC, useState } from "react";

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
  // const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    // setSelectedValue(value);
    onValueChange(value);
  };

  return (
    <select
      className={`rounded-md border border-gray-200 py-2 px-4 text-sm ${className}`}
      // value={selectedValue}
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
