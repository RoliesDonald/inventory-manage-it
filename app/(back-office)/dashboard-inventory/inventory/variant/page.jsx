import DataTable from "@/components/dashboard/DataTable";
import HeaderList from "@/components/dashboard/HeaderList";
import { getData } from "@/lib/getData";
import React from "react";

export default async function Variant() {
  const variant = await getData("variant");

  const columns = ["title", "description"];
  return (
    <div className="justify-between w-full p-4">
      <HeaderList
        title="Variant"
        href="/dashboard-inventory/inventory/variant/new"
      />

      <DataTable data={variant} columns={columns} sourceItem="variant" />
    </div>
  );
}
