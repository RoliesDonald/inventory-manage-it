import React, { useState } from "react";

export default function SelectInput({
  label,
  name,
  register,
  className = "xs:col-span-2",
  options = [],
}) {
  const [value, setValue] = useState("");
  function handleSelect(event) {
    setValue(event.target.value);
  }
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          {...register(`${name}`)}
          id={name}
          name={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          onChange={handleSelect}
        >
          {options.map((option, i) => {
            return (
              <option key={i} value={option.id}>
                {option.title}
              </option>
            );
          })}
        </select>
        <p className="text-yellow-300">{value}</p>
      </div>
    </div>
  );
}
