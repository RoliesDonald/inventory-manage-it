import FormHeader from "@/components/dashboard/FormHeader";
import React from "react";

export default function NewSalesReceipts() {
  return (
    <div className="justify-between w-full p-4 dark:border-gray-600">
      <FormHeader
        title="New Sales Receipt"
        href="/dashboard-inventory/inventory/category"
      />
    </div>
  );
}
