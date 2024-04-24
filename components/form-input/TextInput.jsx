"use client";

import React from "react";

export default function TextInput({
  lable,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  className = "xs:col-span-2",
}) {
  //   const {
  //     register,
  //     formState: { errors },
  //   } = useForm();
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {lable}
      </label>
      <input
        {...register(`${name}`, { required: isRequired })}
        type={type}
        name={name}
        id={name}
        autoComplete={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder={`${lable.toLowerCase()}`}
      />
      {errors[`${name}`] && (
        <span className="text-sm flex justify-end text-red-600 pr-3 pt-1">
          {`${lable} is Required`}
        </span>
      )}
    </div>
  );
}
