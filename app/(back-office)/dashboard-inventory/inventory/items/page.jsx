// "use client";
import FIxHeader from "@/components/dashboard/FIxHeader";
import React from "react";
import piston from "@/public/images/piston.png";
import OptionCard from "@/components/others/OptionCard";
import DataTable from "@/components/dashboard/DataTable";
import { getData } from "@/lib/getData";

export default async function Items() {
  const itemData = await getData("items");
  const columns = [
    "imageUrl",
    "title",
    "partNum",
    "brand.title",
    "category.title",
    "quantity",
    "variant.title",
  ];
  // const optionCards = [
  //   {
  //     title: "Items",
  //     descriptions: "Create Standalone items and services that buy and sell",
  //     img: piston,
  //     link: "/new",
  //     linkTitle: "New Item",
  //     enabled: false,
  //   },
  //   {
  //     title: "Item Group",
  //     descriptions: "Create Standalone items and services that buy and sell",
  //     img: piston,
  //     link: "/newItemGroup",
  //     linkTitle: "New Item Group",
  //     enabled: true,
  //   },
  //   {
  //     title: "Composite Items",
  //     descriptions: "Create Standalone items and services that buy and sell",
  //     img: piston,
  //     link: "/newCompositeItem",
  //     linkTitle: "New Composite Item",
  //     enabled: true,
  //   },
  //   {
  //     title: "Price List",
  //     descriptions: "Create Standalone items and services that buy and sell",
  //     img: piston,
  //     link: "/newPriceList",
  //     linkTitle: "New Price List",
  //     enabled: true,
  //   },
  // ];
  return (
    <div>
      <FIxHeader newLink="/dashboard-inventory/inventory/items/new" />
      <div className="justify-between w-full p-4">
        <DataTable data={itemData} columns={columns} sourceItem="items" />
      </div>
      {/* <div className="grid grid-cols-3 lg:grid-cols-3 gap-5 auto-rows-max mx-2 my-2">
        {optionCards.map((card, i) => {
          return <OptionCard key={i} optionData={card} />;
        })}
      </div> */}
    </div>
  );
}
