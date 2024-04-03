import HomeNavBar from "@/components/dashboard/HomeNavBar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <HomeNavBar />
      {children}
    </div>
  );
}
