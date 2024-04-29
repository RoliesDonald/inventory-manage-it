"use client";
import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import CollapsibleLink from "./Collapsible";
import { FaChevronCircleRight } from "react-icons/fa";
import Link from "next/link";

export default function SideBarDropDown({
  title,
  items,
  icon: Icon,
  href,
  setShowSideBar,
}) {
  return (
    <Collapsible className="rounded-xl mr-2 hover:bg-red-700 py-1 pr-5">
      <CollapsibleTrigger className="flex justify-between items-center w-full mr-2">
        <div className="p-2 flex items-center space-x-3">
          <Icon className="w-4 h4" />
          <span>{title}</span>
        </div>
        <FaChevronCircleRight />
      </CollapsibleTrigger>
      <CollapsibleContent>
        {items.map((item, i) => {
          return (
            <CollapsibleLink
              setShowSideBar={setShowSideBar}
              href={item.href}
              title={item.title}
              newhref={item.newhref}
              key={i}
            />
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
}
