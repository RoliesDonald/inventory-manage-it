import DataTable from "@/components/dashboard/DataTable";
import HeaderList from "@/components/dashboard/HeaderList";
import { getData } from "@/lib/getData";
import React from "react";

export default async function Warehouses() {
  const brand = await getData("warehouse");

  const columns = ["title", "warehouseType", "city", "stockQty"];
  return (
    <div className="justify-between w-full p-4">
      <HeaderList
        title="Warehouse"
        href="/dashboard-inventory/inventory/warehouse/new"
      />
      <DataTable data={brand} columns={columns} sourceItem="warehouse" />
    </div>
  );
}
