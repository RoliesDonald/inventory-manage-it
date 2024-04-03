import { Plus } from "lucide-react";
import React, { useState } from "react";

export default function SubmitBtn({ isLoading, title }) {
  return (
    <div className="grid sm:col-span-1">
      {isLoading ? (
        <button
          type="submit"
          className="col-span-1 col-end-12 text-slate-50 inline-flex items-center justify-center bg-blue-700 hover:bg-blue-900 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          <svg
            className="mr-1 -ml-1 w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          Saving {title} Please wait...
        </button>
      ) : (
        <button
          type="submit"
          className="col-span-1 col-end-12 inline-flex items-center justify-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          {/* <Plus className="w-5 h-5 mr-2" /> */}
          <span>{`${title}`}</span>
        </button>
      )}
    </div>
  );
}
