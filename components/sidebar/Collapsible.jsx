import { PlusCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CollapsibleLink({
  href,
  title,
  newhref,
  setShowSideBar,
}) {
  return (
    <div className="flex pr-3 mx-2 items-center transition-all duration-300 rounded-md space-x-2">
      <Link
        className=" py-2 px-2 hover:bg-red-900 w-full mx-1 transition-all duration-300 rounded-md "
        href={href}
        onClick={() => setShowSideBar(false)}
      >
        <span className="line-clamp-2">{title}</span>
      </Link>
      <Link
        href={`${newhref}`}
        className=" py-2 px-2 hover:bg-red-900  mx-1 transition-all duration-300 rounded-md "
      >
        <PlusCircleIcon size={18} />
      </Link>
    </div>
  );
}
