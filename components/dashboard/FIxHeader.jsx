import React from "react";
import { FaChevronCircleDown, FaPlusCircle } from "react-icons/fa";
import { CiCircleList, CiGrid41, CiCircleMore } from "react-icons/ci";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { MdHelp } from "react-icons/md";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FIxHeader({ newLink }) {
  return (
    <div className="flex items-center justify-between bg-slate-400 px-4 py-4">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex gap-2">
        <div className="pr-2 border-r-2 border-gray-300 flex gap-4 text-slate-100 hover:text-slate-500">
          {/* new */}
          <Link
            href={newLink}
            className="p-1 rounded-lg bg-blue-600 hover:bg-blue-200 flex items-center space-x-2  px-2"
          >
            <FaPlusCircle />
            <span>New</span>
          </Link>
        </div>
        <div className="flex overflow-hidden rounded-lg ">
          {/* Layout */}
          <button className=" bg-neutral-200 border p-2 border-neutral-300">
            <CiCircleList className="hover:text-blue-500 w-4 h-4" />
          </button>
          <button className=" bg-neutral-200 border p-2 border-neutral-300">
            <CiGrid41 className="hover:text-blue-500 w-4 h-4" />
          </button>
        </div>
        <div className="flex">
          {/* more */}
          <button className="p-1 rounded-lg flex items-center space-x-2 px-2  bg-neutral-200 border border-neutral-300">
            <div>
              <CiCircleMore className="hover:text-blue-500 w-4 h-4" />
            </div>
          </button>
        </div>
        <div className="flex gap-2">
          {/* Help */}
          <button className="p-1 rounded-lg flex items-center space-x-2 px-2 bg-red-500 hover:bg-red-200 text-white hover:text-slate-500">
            <div>
              <MdHelp className="w-5 h-5" />
            </div>
          </button>
          {/* Help */}
        </div>
      </div>
    </div>
  );
}
