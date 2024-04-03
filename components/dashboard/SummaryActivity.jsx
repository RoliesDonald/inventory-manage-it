import { CheckCircle, PlaneLanding, Sailboat, SquarePen } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ActivitySummary() {
  const ActivitySummary = [
    {
      qtyNum: 10,
      unit: "Qty",
      icon: <CheckCircle />,
      title: "to be packed",
      href: "",
      color: "text-red-600",
      hover: "bg-red-600",
    },
    {
      qtyNum: 10,
      unit: "Qty",
      icon: <Sailboat />,
      title: "shipped",
      href: "",
      color: "text-blue-600 border-blue-500",
    },
    {
      qtyNum: 10,
      unit: "Qty",
      icon: <PlaneLanding />,
      title: "Deliver",
      href: "",
      color: "text-green-600 border-green-500",
    },
    {
      qtyNum: 10,
      unit: "Qty",
      icon: <SquarePen />,
      title: "Create Invoice",
      href: "",
      color: "text-orange-600 border-orange-600",
    },
  ];

  const inventorySummary = [
    {
      title: "In Pack",
      qty: 20,
    },
    {
      title: "Ready to Shipped",
      qty: 5,
    },
    {
      title: "Pass Check",
      qty: 3,
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-4 bg-blue-100/35 border-b-2 border-slate-300 p-8">
      {/* Actovity Sum */}
      <div className="col-span-8">
        <h2 className="mb-3 text-2xl text-slate-600">Activity Summary</h2>
        <div className="grid grid-cols-4 gap-4">
          {/* Card */}
          {ActivitySummary.map((item, i) => {
            return (
              <Link
                href={item.href}
                key={i}
                className={`flex flex-col items-center cursor-pointer rounded-lg bg-white/60 hover:bg-blue-50/80 active:bg-blue-400/40 border-2 border-slate-500 px-3 py-6 gap-3  transition-all duration-300`}
              >
                <h1 className={`text-3xl ${item.color}`}>{item.qtyNum}</h1>
                <small className="text-slate-400">{item.unit}</small>
                <div className="flex justify-between items-center space-x-2">
                  <div className="text-slate-400">{item.icon}</div>
                  {/* <CheckCircle className='w-4 h-4 text-slate-500' /> */}
                  <div>
                    <span className="line-clamp-1 uppercase text-slate-500 text-xs">
                      {item.title}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {/* Inventory Sum */}
      <div className="col-span-4">
        <h2 className="mb-3 text-2xl text-slate-600">Inventory Summary</h2>
        <div className="space-y-3">
          {/* Card */}
          {inventorySummary.map((item, i) => {
            return (
              <div className="flex items-center cursor-pointer rounded-lg bg-white/30 hover:bg-white border-slate-200 hover:border-blue-500 shadow-md hover:text-blue-500 p-4 gap-3 border transition-all duration-300 justify-between">
                <h1 className="text-slate-500 line-clamp-1">{item.title}</h1>
                <h2 className="text-slate-600">{item.qty}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
