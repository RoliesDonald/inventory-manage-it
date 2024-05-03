import DataTable from "@/components/dashboard/DataTable";
import HeaderList from "@/components/dashboard/HeaderList";
import { getData } from "@/lib/getData";
import React from "react";

export default async function SupplierList() {
  const supplier = await getData("supplier");
  const columns = ["title", "contactPerson", "phone", "email", "supplierCode"];
  return (
    <div className="justify-between w-full p-4">
      <HeaderList
        title="Supplier"
        href="/dashboard-inventory/inventory/supplier/new"
      />
      <DataTable data={supplier} columns={columns} sourceItem="supplier" />
    </div>
  );
}
