"use client";
import { FC, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

interface SearchProps extends React.ComponentPropsWithoutRef<"input"> {
  onInputChange: (value: string) => void;
  placeholder?: string;
}

export const Search: FC<SearchProps> = (props: SearchProps) => {
  const { placeholder = "", onInputChange, ...inputProps } = props;

  const [state, setState] = useState<string>("");

  const handleChange = useDebouncedCallback((value: string) => {
    onInputChange(value);
  }, 400);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setState(value);
    handleChange(value);
  };

  return (
    <div className="flex">
      <input
        className="w-full px-2 py-1 rounded-sm outline-none ring-2 ring-gray-100 focus-visible:ring-4 focus-visible:ring-primary-light"
        onChange={handleInputChange}
        value={state}
        placeholder={placeholder}
        {...inputProps}
      />
    </div>
  );
};
