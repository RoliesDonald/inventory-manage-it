import FIxHeader from "@/components/dashboard/FIxHeader";
import React from "react";

export default function Inventory() {
  return (
    <div className="justify-between w-auto p-4 border-b border-gray-200 dark:border-gray-600">
      <FIxHeade title="Warehouse" />
      <div className="grid grid-cols-4 lg:grid-cols-8 gap-5 auto-rows-max mx-2 my-2">
        {/* <OptionCard optionData={(title = "")} /> */}
      </div>
    </div>
  );
}
