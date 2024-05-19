import DataTable from "@/components/dashboard/DataTable";
import HeaderList from "@/components/dashboard/HeaderList";
import { getData } from "@/lib/getData";
import React from "react";

export default async function Type() {
  const type = await getData("type");

  const columns = ["title", "description"];
  return (
    <div className="justify-between w-full p-4">
      <HeaderList title="Type" href="/dashboard-inventory/inventory/type/new" />

      <DataTable data={type} columns={columns} sourceItem="type" />
    </div>
  );
}
