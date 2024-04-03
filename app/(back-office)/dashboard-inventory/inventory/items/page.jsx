"use client";
import FIxHeader from "@/components/dashboard/FIxHeader";
import React from "react";
import piston from "@/public/images/piston.png";

import OptionCard from "@/components/others/OptionCard";

export default function Items() {
  // const { title, descriptions, img, link, linkTitle, enabled } = optionData;
  const optionCards = [
    {
      title: "Items",
      descriptions: "Create Standalone items and services that buy and sell",
      img: piston,
      link: "/new",
      linkTitle: "New Item",
      enabled: false,
    },
    {
      title: "Item Group",
      descriptions: "Create Standalone items and services that buy and sell",
      img: piston,
      link: "/newItemGroup",
      linkTitle: "New Item Group",
      enabled: true,
    },
    {
      title: "Composite Items",
      descriptions: "Create Standalone items and services that buy and sell",
      img: piston,
      link: "/newCompositeItem",
      linkTitle: "New Composite Item",
      enabled: true,
    },
    {
      title: "Price List",
      descriptions: "Create Standalone items and services that buy and sell",
      img: piston,
      link: "/newPriceList",
      linkTitle: "New Price List",
      enabled: true,
    },
  ];
  return (
    <div>
      <FIxHeader newLink="/dashboard-inventory/inventory/items/new" />
      <div className="grid grid-cols-3 lg:grid-cols-3 gap-5 auto-rows-max mx-2 my-2">
        {optionCards.map((card, i) => {
          return <OptionCard key={i} optionData={card} />;
        })}
      </div>
    </div>
  );
}
