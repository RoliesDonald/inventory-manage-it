"use client";
import {
  BaggageClaim,
  BookCheck,
  Cable,
  ChevronLeft,
  Home,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
  File,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SubsribtionCard from "../dashboard/SubsribtionCard";
import SideBarDropDown from "./SideBarDropDown";

export default function SideBar() {
  const inventoryLink = [
    {
      title: "Category",
      href: "/dashboard-inventory/inventory/category",
      newhref: "/dashboard-inventory/inventory/category/new",
    },
    {
      title: "Brands",
      newhref: "/dashboard-inventory/inventory/brand/new",
      href: "/dashboard-inventory/inventory/brand",
    },
    {
      title: "Items",
      newhref: "/dashboard-inventory/inventory/items/new",
      href: "/dashboard-inventory/inventory/items",
    },
    {
      title: "Units",
      newhref: "/dashboard-inventory/inventory/unit/new",
      href: "/dashboard-inventory/inventory/unit",
    },
    {
      title: "Warehouse",
      newhref: "/dashboard-inventory/inventory/warehouse/new",
      href: "/dashboard-inventory/inventory/warehouse",
    },
    {
      title: "Stock Adj",
      newhref: "/dashboard-inventory/inventory/adjustment/new",
      href: "/dashboard-inventory/inventory/adjustment",
    },
    {
      title: "Supplier",
      newhref: "/dashboard-inventory/inventory/supplier/new",
      href: "/dashboard-inventory/inventory/supplier",
    },
  ];
  const salesLink = [
    {
      title: "Cuctomers",
      href: "/dashboard-inventory/sales/customers",
      newhref: "/dashboard-inventory/sales/customers/new",
    },
    {
      title: "Sales Order",
      href: "/dashboard-inventory/sales/salesorder",
      newhref: "/dashboard-inventory/sales/salesorder/new",
    },
    {
      title: "Packages",
      href: "/dashboard-inventory/sales/packages",
      newhref: "/dashboard-inventory/sales/packages/new",
    },
    {
      title: "Shippments",
      href: "/dashboard-inventory/sales/shipment",
      newhref: "/dashboard-inventory/sales/shipment/new",
    },
    {
      title: "Invoices",
      href: "/dashboard-inventory/sales/invoices",
      newhref: "/dashboard-inventory/sales/invoices/new",
    },
    {
      title: "Sales Reciepts",
      href: "/dashboard-inventory/sales/salesreciepts",
      newhref: "/dashboard-inventory/sales/salesreciepts/new",
    },
    {
      title: "Payment Received",
      href: "/dashboard-inventory/sales/paymentreceived",
      newhref: "/dashboard-inventory/sales/paymentreceived/new",
    },
    {
      title: "Sales Return",
      href: "/dashboard-inventory/sales/salesreturn",
      newhref: "/dashboard-inventory/sales/salesreturn/new",
    },
    {
      title: "Credit Notes",
      href: "/dashboard-inventory/sales/creditnotes",
      newhref: "/dashboard-inventory/sales/creditnotes/new",
    },
  ];
  const purchaseLink = [
    {
      title: "Cuctomers",
      href: "/dashboard-inventory/sales/customers",
      newhref: "/dashboard-inventory/sales/customers/new",
    },
    {
      title: "Sales Order",
      href: "/dashboard-inventory/sales/salesorder",
      newhref: "/dashboard-inventory/sales/salesorder/new",
    },
    {
      title: "Packages",
      href: "/dashboard-inventory/sales/packages",
      newhref: "/dashboard-inventory/sales/packages/new",
    },
    {
      title: "Shippments",
      href: "/dashboard-inventory/sales/shipment",
      newhref: "/dashboard-inventory/sales/shipment/new",
    },
    {
      title: "Invoices",
      href: "/dashboard-inventory/sales/invoices",
      newhref: "/dashboard-inventory/sales/invoices/new",
    },
    {
      title: "Sales Reciepts",
      href: "/dashboard-inventory/sales/salesreciepts",
      newhref: "/dashboard-inventory/sales/salesreciepts/new",
    },
    {
      title: "Payment Received",
      href: "/dashboard-inventory/sales/paymentreceived",
      newhref: "/dashboard-inventory/sales/paymentreceived/new",
    },
    {
      title: "Sales Return",
      href: "/dashboard-inventory/sales/salesreturn",
      newhref: "/dashboard-inventory/sales/salesreturn/new",
    },
    {
      title: "Credit Notes",
      href: "/dashboard-inventory/sales/creditnotes",
      newhref: "/dashboard-inventory/sales/creditnotes/new",
    },
  ];
  return (
    <div className="w-60 min-h-screen bg-slate-800 text-slate-200 fixed hidden sm:block">
      {/* top sidebar or logo */}
      <div className="flex flex-col ">
        {/* logo */}
        <Link href="/">
          <div className="flex items-center justify-center space-x-3 bg-slate-900 py-2.5 px-3 border-b-2 border-slate-500 shadow-md">
            <Image
              src="/images/logo/logo-sm-light.png"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "15%", height: "auto" }}
              property="true"
              alt="logo"
            />
            <span className="font-semibold text-red-500 text-[18px]">
              Kampak Jaya
            </span>
          </div>
        </Link>
      </div>
      {/* Link navigation */}

      <nav className="flex flex-col gap-2 pl-5 py-5">
        <Link
          href="/dashboard-inventory/home/dashboard"
          className="flex items-center space-x-2 bg-red-700 text-slate-50 px-3 py-3 rounded-xl mr-4"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>
        <SideBarDropDown
          title="Inventory"
          items={inventoryLink}
          icon={BaggageClaim}
          href="/dashboard-inventory/inventory"
        />
        <SideBarDropDown title="Sales" items={salesLink} icon={ShoppingCart} />
        <SideBarDropDown
          title="Purchase"
          items={purchaseLink}
          icon={ShoppingBag}
        />
        <SideBarDropDown title="Report" items={salesLink} icon={BookCheck} />
        <SideBarDropDown title="Integration" items={salesLink} icon={Cable} />
        <SideBarDropDown title="Documents" items={salesLink} icon={File} />
      </nav>

      <SubsribtionCard />
      {/* bottom Sidebar */}
      <div className="flex flex-col mt-auto">
        <button>
          <div className="flex items-center bg-slate-900 py-2 px-3 justify-center">
            <ChevronLeft size={22} />
          </div>
        </button>
      </div>
    </div>
  );
}
