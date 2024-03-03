"use client";
import { useDebouncedCallback } from "use-debounce";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FC, useEffect, useState } from "react";

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
        // className="border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
        className="w-full px-2 py-1 rounded-sm outline-none ring-2 ring-gray-300 focus-visible:ring-4 focus-visible:ring-primary-light"
        onChange={handleInputChange}
        value={state}
        placeholder={placeholder}
        {...inputProps}
      />
      {/* <MagnifyingGlassIcon className="absolute inset-y-0 left-0 flex items-center pl-3" /> */}
    </div>
  );
};
// <div className="relative flex flex-1 flex-shrink-0">
{
  /* <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm"
        placeholder={placeholder}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div> */
}
