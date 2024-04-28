import DataTable from "@/components/dashboard/DataTable";
import HeaderList from "@/components/dashboard/HeaderList";
import { getData } from "@/lib/getData";
import React from "react";

export default async function Category() {
  const categories = await getData("categories");

  const columns = ["title", "description", ""];
  return (
    <div className="justify-between w-full p-4">
      <HeaderList
        title=" Category"
        href="/dashboard-inventory/inventory/category/new"
      />

      <DataTable data={categories} columns={columns} />
    </div>
  );
}
