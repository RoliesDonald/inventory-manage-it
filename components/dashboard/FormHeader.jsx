import Link from "next/link";
import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

export default function FormHeader({ title, href }) {
  return (
    <div
      className="sticky top-16 w-full flex items-center justify-between bg-slate-100  shadow-md rounded-xl py-3 px-4 pr-5"
      tabIndex="-1"
    >
      <div className="flex w-full justify-between items-center">
        <h2 className="text-md font-medium text-slate-500">{title}</h2>
        <Link
          href={href}
          className="flex items-center space-x-2 text-slate-100 rounded-xl px-3 py-1 bg-blue-500"
        >
          <MdOutlineArrowBackIosNew />
          <span>Back to {title} List</span>
        </Link>
      </div>
    </div>
  );
}
