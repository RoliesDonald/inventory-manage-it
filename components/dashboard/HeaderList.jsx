import Link from "next/link";
import React from "react";
import { MdOutlineCreate } from "react-icons/md";

export default function HeaderList({ title, href }) {
  return (
    <div
      className="sticky top-16 w-full flex items-center justify-between bg-slate-100  shadow-md rounded-xl py-4 px-3 pr-5 mb-5"
      tabIndex="-1"
    >
      <div className="flex w-full justify-between items-center">
        <h2 className="text-lg font-medium text-slate-500">{title}</h2>
        <Link
          href={href}
          className="flex items-center space-x-2 text-slate-100 rounded-xl px-3 py-1 bg-blue-500"
        >
          <MdOutlineCreate />
          <span>Create New {title}</span>
        </Link>
      </div>
    </div>
  );
}
