import {
  Bell,
  Bolt,
  ChevronDown,
  History,
  LayoutGrid,
  Plus,
  Users,
} from "lucide-react";
import React from "react";
import SearchField from "./SearchField";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Header() {
  return (
    <div className="sticky z-50 top-0 bg-slate-200 h-14 flex items-center justify-between px-8 border-b-2 border-slate-300 shadow-md">
      <div className="flex gap-3">
        {
          <button>
            <History className="w-5 h-6 text-slate-500" />
          </button>
        }
        {<SearchField />}
      </div>
      <div className="flex items-center gap-3 ">
        <div className="flex pr-3 border-r-2 border-gray-300 space-x-2">
          <button className="p-[5px] hover:bg-slate-300 hover:rounded-lg">
            <Users size={18} className="text-slate-800" />
          </button>
          <button className="p-[5px] hover:bg-slate-300 hover:rounded-lg">
            <Bell size={18} className="text-slate-800" />
          </button>
          <button className="p-[5px] hover:bg-slate-300 hover:rounded-lg">
            <Bolt size={18} className="text-slate-800" />
          </button>
        </div>
        <div className="flex gap-4">
          <Select className="bg-slate-950">
            <SelectTrigger className="w-[180px] bg-slate-50">
              <SelectValue placeholder="Rolies Donald" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Setting</SelectItem>
              <SelectItem value="dark">Log Out</SelectItem>
            </SelectContent>
          </Select>
          {/* <button className="flex items-center">
            <span className="text-slate-500">Rolies Donal</span>
            <ChevronDown className="w-5 h-5 text-slate-500" />
          </button> */}

          <Image
            alt="img user default"
            src="/images/profile-default.png"
            height={96}
            width={96}
            className="rounded-full h-8 w-8 border border-slate-400 flex items-center justify-center"
          />

          <button className="flex items-center">
            <LayoutGrid className="w-5 h-5 text-slate-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
