import React from "react";

export default function HeaderList({ title }) {
  return (
    <div
      className="sticky top-12 bg-slate-100  shadow-md rounded-xl py-3 px-4 pr-5"
      tabIndex="-1"
    >
      <h2 className="text-md font-medium text-slate-500">{title}</h2>
    </div>
  );
}
