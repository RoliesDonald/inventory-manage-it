import Header from "@/components/dashboard/Header";
import SideBar from "@/components/sidebar/SideBar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <main className="w-full sm:ml-60 ml-0 bg-neutral-200 min-h-screen ">
        <Header />
        {children}
      </main>
    </div>
  );
}
