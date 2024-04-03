import { Search } from "lucide-react";
import React from "react";

export default function SearchField() {
  return (
    <form className="">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search className="w-5 h-5 text-gray-300 dark:text-gray-200" />
        </div>
        <input
          type="text"
          id="simple-search"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none  focus:ring-red-400 block w-full rounded-lg sm:text-sm focus:ring-1 ps-10 p-1.5   "
          placeholder="Search in ....."
          required
        />
      </div>
    </form>
  );
}
