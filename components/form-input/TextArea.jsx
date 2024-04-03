import React from "react";

export default function TextArea({ label, name, register, type = "text" }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          {...register(`${name}`)}
          type={type}
          label={label}
          name={name}
          id={name}
          autoComplete={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder={`Type the ${label}`}
        />
      </div>
    </div>
  );
}
