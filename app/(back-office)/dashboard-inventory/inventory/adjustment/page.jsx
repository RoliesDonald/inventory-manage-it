import DataTable from "@/components/dashboard/DataTable";
import HeaderList from "@/components/dashboard/HeaderList";
import { getData } from "@/lib/getData";
import React from "react";

export default async function Adjustment() {
  const addStockAdjData = getData("adjustment/add");
  const transtockAdjData = getData("adjustment/transfer");

  const [addStockAdj, transtockAdj] = await Promise.all([
    addStockAdjData,
    transtockAdjData,
  ]);
  const columnsAdd = [
    "refNum",
    "items.title",
    "brand.title",
    "addStockQty",
    "createdAt",
  ];
  const columnsTrans = ["refNum", "items.title", "transferStockQty"];
  return (
    <div className="relative justify-between w-full p-4 z-0">
      <HeaderList
        title="Adjustment"
        href="/dashboard-inventory/inventory/adjustment/new"
      />
      <div className="w-full justify-between mt-5 mb-2 py-2 px-4 rounded-md bg-gray-300 text-transform: capitalize">
        List of all Add Stock
      </div>
      <div className="z-0">
        <DataTable
          data={addStockAdj}
          columns={columnsAdd}
          sourceItem="adjustment/add"
        />
      </div>
      <div className="w-full justify-between mt-5 mb-2 py-2 px-4 rounded-md bg-gray-300 text-transform: capitalize">
        List of all Transfer
      </div>
      <DataTable
        data={transtockAdj}
        columns={columnsTrans}
        sourceItem="adjustment/transfer"
      />
    </div>
  );
}
