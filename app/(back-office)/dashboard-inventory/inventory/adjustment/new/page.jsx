"use client";
import AddInventoryForm from "@/components/dashboard/AddInventoryForm";
import FormHeader from "@/components/dashboard/FormHeader";
import TransferInventoryForm from "@/components/dashboard/TransferInventoryForm";

import React, { useState } from "react";

export default function NewAdjustment() {
  const tabs = [
    {
      title: "Add New",
    },
    {
      title: "Transfer",
    },
  ];
  return (
    <div className=" justify-normal w-full p-4 dark:border-gray-600 lg:pr-4 md:pr-4">
      {/* Header */}
      <FormHeader
        title="Inventory Adjusment"
        href="/dashboard-inventory/inventory/adjustment"
      />
      {/* Form */}

      <div className="w-full rounded-lg sm:px-6 md:px-8  dark:border-gray-700 mx-auto my-3">
        <ul class=" text-sm mt-2 font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
          {tabs.map((tab, i) => {
            return (
              <li class="w-full focus-within:z-10" key={i}>
                <button
                  href="#"
                  className="inline-block w-full p-4 text-gray-900  bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white hover:text-gray-700 hover:bg-gray-500"
                  aria-current="page"
                >
                  {tab.title}
                </button>
              </li>
            );
          })}

          {/* <li class="w-full focus-within:z-10">
            <button
              href="#"
              class="inline-block w-full p-4 text-gray-900  bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
              aria-current="page"
            >
              Add New
            </button>
          </li>
          <li class="w-full focus-within:z-10">
            <button
              href="#"
              class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              Transfer
            </button>
          </li> */}
        </ul>
      </div>

      <TransferInventoryForm />
      <AddInventoryForm />

      {/* Bottom */}
    </div>
  );
}
