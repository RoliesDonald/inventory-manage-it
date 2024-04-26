"use client";

import React from "react";

export default function TextDisplay({
  lable,
  name,
  className = "xs:col-span-2",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {lable}
      </label>
      <h2 className="bg-gray-50 border border-gray-300 text-red-900 text-lg rounded-lg p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-yellow-300">
        0
      </h2>
    </div>
  );
}
