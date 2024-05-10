import DataTable from "@/components/dashboard/DataTable";
import HeaderList from "@/components/dashboard/HeaderList";
import { getData } from "@/lib/getData";
import React from "react";

export default async function Units() {
  const unit = await getData("unit");

  const columns = ["title", "abreviation"];
  return (
    <div className="justify-between w-full p-4">
      <HeaderList
        title="Units"
        href="/dashboard-inventory/inventory/unit/new"
      />
      <DataTable data={unit} columns={columns} sourceItem="unit" />
    </div>
  );
}
