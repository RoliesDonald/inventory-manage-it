"use client";

import { Building2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function HomeNavBar() {
  const pathName = usePathname();
  console.log(pathName);
  const navLink = [
    {
      title: "Dashboard",
      href: "/dashboard-inventory/home/dashboard",
    },
    {
      title: "Getting Started",
      href: "/dashboard-inventory/home/getting-start",
    },
    {
      title: "Recent Update",
      href: "/dashboard-inventory/home/updates",
    },
    {
      title: "Announcements",
      href: "/dashboard-inventory/home/announcements",
    },
  ];

  return (
    <div className="bg-neutral-200 shadow-md h-auto">
      <div className="flex space-x-3 p-3 items-center ">
        <div className=" flex w-12 h-12 bg-slate-200 items-center justify-center rounded-lg border-slate-300 border-2 text-indigo-700">
          <Building2 />
        </div>
        <div className="flex flex-col">
          <p className="text-2xl roboto font-semibold text-slate-400">
            Hallo, Manager Rent
          </p>
          <span className="roboto font-semibold text-slate-600">Donald</span>
        </div>
      </div>
      <div className="flex sticky top-0">
        <nav className=" mb-2 ml-5">
          {navLink.map((item, i) => {
            return (
              <Link
                href={item.href}
                key={i}
                className={`${
                  pathName === item.href
                    ? "py-2 px-4 border-b-2 border-blue-600 text-slate-600"
                    : "py-2 px-3 "
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
