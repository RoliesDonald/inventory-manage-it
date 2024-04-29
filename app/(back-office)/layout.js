"use client";
import Header from "@/components/dashboard/Header";
import SideBar from "@/components/sidebar/SideBar";
import React, { useState } from "react";
import("flowbite");
export default function Layout({ children }) {
  const [showSideBar, setShowSidebar] = useState(false);
  return (
    <div className="flex">
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSidebar} />
      <main className="w-full lg:ml-60 ml-0 bg-neutral-200 min-h-screen ">
        <Header setShowSidebar={setShowSidebar} />
        {children}
      </main>
    </div>
  );
}
