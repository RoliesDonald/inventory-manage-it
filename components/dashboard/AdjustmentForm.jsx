"use client";
import AddInventoryForm from "@/components/dashboard/AddInventoryForm";
import FormHeader from "@/components/dashboard/FormHeader";
import TransferInventoryForm from "@/components/dashboard/TransferInventoryForm";
import ValueAdjustment from "@/components/dashboard/ValueAdjustment";

import React, { useState } from "react";

export default function AdjustmentForm({ items, warehouse, brands, category }) {
  const tabs = [
    {
      title: "Add New",
      page: "add",
    },
    {
      title: "Transfer",
      page: "transfer",
    },
    {
      title: "Value Adjusment",
      page: "valueAdj",
    },
  ];
  const [acticePage, setActive] = useState("add");

  return (
    <div className=" justify-normal w-full p-4 dark:border-gray-600 lg:pr-4 md:pr-4">
      {/* Header */}
      <FormHeader
        title="Inventory Adjusment"
        href="/dashboard-inventory/inventory/adjustment"
      />
      {/* Form */}
      <div className="w-full rounded-lg dark:border-gray-700 mx-auto my-2">
        <ul className="space-x-1 text-sm font-medium text-center text-gray-500 rounded-lg sm:flex dark:divide-gray-700 dark:text-gray-400">
          {tabs.map((tab, i) => {
            return (
              <li className="w-full" key={i}>
                <button
                  onClick={() => setActive(tab.page)}
                  // href="#"
                  className={`${
                    acticePage === tab.page
                      ? "inline_block w-full p-4  text-gray-900  bg-gray-300 border border-gray-200 dark:border-gray-400 rounded-lg dark:bg-gray-300 dark:text-gray-800 hover:text-blue-600 hover:bg-gray-50"
                      : "inline-block w-full p-4  text-gray-900  bg-gray-400 border border-gray-200 dark:border-gray-400 rounded-lg dark:bg-gray-700 dark:text-white hover:text-gray-300 hover:bg-gray-500"
                  }`}
                  aria-current="page"
                >
                  {tab.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {acticePage === "add" ? (
        <AddInventoryForm
          items={items}
          warehouse={warehouse}
          brands={brands}
          category={category}
        />
      ) : acticePage === "transfer" ? (
        <TransferInventoryForm
          items={items}
          warehouse={warehouse}
          brands={brands}
          category={category}
        />
      ) : acticePage === "valueAdj" ? (
        <ValueAdjustment
          items={items}
          warehouse={warehouse}
          brands={brands}
          category={category}
        />
      ) : (
        <AddInventoryForm />
      )}
      {/* Bottom */}
    </div>
  );
}
