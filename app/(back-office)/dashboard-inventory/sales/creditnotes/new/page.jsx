import FormHeader from "@/components/dashboard/FormHeader";
import React from "react";

export default function NewCreditNote() {
  return (
    <div className="justify-between w-full p-4 dark:border-gray-600">
      <FormHeader
        title="New Credit Notes"
        href="/dashboard-inventory/inventory/category"
      />
    </div>
  );
}
