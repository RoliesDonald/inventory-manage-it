import { Bell, Bolt, History, Users } from "lucide-react";
import { MdMenuOpen } from "react-icons/md";
import React from "react";
import SearchField from "./SearchField";

export default function Header() {
  return (
    <div className="sticky z-50 top-0 bg-slate-200 h-14 flex items-center justify-between px-8 border-b-2 border-slate-300 shadow-md">
      <button className=" items-center lg:hidden">
        <MdMenuOpen className="w-7 h-7 text-slate-500" />
      </button>
      <div className="flex gap-3 items-center">
        <button className="items-center hidden lg:block">
          <History className="w-5 h-6 text-slate-500" />
        </button>

        {<SearchField />}
      </div>

      <div className="flex gap-3">
        <div className="hidden  items-center gap-3 lg:flex">
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
        </div>
        <img
          id="avatarButton"
          type="button"
          data-dropdown-toggle="userDropdown"
          data-dropdown-placement="bottom-start"
          className="w-10 h-10 rounded-full cursor-pointer"
          src="/images/profile-default.png"
          alt="User dropdown"
        />

        <div
          id="userDropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Bonnie Green</div>
            <div className="font-medium truncate">name@flowbite.com</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="avatarButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
          </ul>
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
