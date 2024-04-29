import DataTable from "@/components/dashboard/DataTable";
import HeaderList from "@/components/dashboard/HeaderList";
import { getData } from "@/lib/getData";
import React from "react";

export default async function Brand() {
  const brand = await getData("brand");

  const columns = ["title", "description"];
  return (
    <div className="justify-between w-full p-4">
      <HeaderList
        title="Brand"
        href="/dashboard-inventory/inventory/brand/new"
      />
      <DataTable data={brand} columns={columns} sourceItem="brand" />
    </div>
  );
}
