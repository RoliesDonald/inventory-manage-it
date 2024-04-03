"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SelectInput from "@/components/form-input/SelectInput";
import TextArea from "@/components/form-input/TextArea";
import TextInput from "@/components/form-input/TextInput";
import UploadImage from "@/components/form-input/UploadImage";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { UploadDropzone, UploadButton, Uploader } from "@/lib/uploadthing";

import { Pencil } from "lucide-react";
import Error from "next/error";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewItem() {
  const [imageUrl, setImageUrl] = useState("");
  const categoryOptions = [
    {
      label: "Engine",
      value: "engine",
      selected: "select",
    },
    {
      label: "Electrical",
      value: "electrical",
    },
    {
      label: "Chasis",
      value: "chasis",
    },
    {
      label: "Lubricans",
      value: "lubricans",
    },
  ];
  const partOptions = [
    {
      label: "OEM Mitsubishi",
      value: "oemmistsubishi",
    },
    {
      label: "OEM Izusu",
      value: "oemisuzu",
    },
    {
      label: "Sekken",
      value: "sekken",
    },
    {
      label: "Shell",
      value: "shell",
    },
  ];
  const supplierOptions = [
    {
      label: "Riau Motor",
      value: "riaumotor",
    },
    {
      label: "Kahar",
      value: "kahar",
    },
  ];
  const unitOptions = [
    {
      label: "Kilogram",
      value: "Kg",
    },
    {
      label: "Gram",
      value: "gr",
    },
    {
      label: "Pieces",
      value: "pcs",
    },
    {
      label: "Box",
      value: "box",
    },
  ];
  const warehouseOptions = [
    {
      label: "Jakarta",
      value: "jkt",
    },
    {
      label: "Semarang",
      value: "smg",
    },
    {
      label: "Surabaya",
      value: "sby",
    },
    {
      label: "Pekanbaru",
      value: "pkb",
    },
    {
      label: "Palembang",
      value: "plb",
    },
  ];

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    data.imageUrl = imageUrl;
    console.log(data);
    setLoading(true);
    const baseURL = "http://localhost:3000";
    try {
      const response = await fetch(`${baseURL}/api/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log(response);
        setLoading(false);
        reset();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <div className="justify-between w-full p-4 border-b border-gray-200 dark:border-gray-600">
      {/* Header */}
      <FormHeader
        title="New Items"
        href="/dashboard-inventory/inventory/items"
      />
      {/* Form */}
      <div className=" p-4 w-full h-full md:h-auto space--5">
        <div className=" p-4 bg-white rounded-lg shadow  dark:bg-gray-800 sm:p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-4 ">
              <TextInput
                lable="Part Name"
                name="partname"
                register={register}
                isRequired="true"
                type="text"
                className="xs:col-span-2"
                errors={errors}
              />
              <TextInput
                lable="Part Number"
                name="partnum"
                register={register}
                isRequired="true"
                type="text"
                className="xs:col-span-2"
                errors={errors}
              />
              <SelectInput
                label="Part Brand"
                name="brand"
                register={register}
                className="w-full"
                options={categoryOptions}
              />
              <SelectInput
                label="Category"
                name="category"
                register={register}
                className="w-full"
                options={partOptions}
              />
              <TextInput
                lable="Barcode"
                name="barcode"
                register={register}
                isRequired="true"
                type="text"
                className="xs:col-span-2"
                errors={errors}
              />
              <TextInput
                lable="Item SKU"
                name="sku"
                register={register}
                isRequired="true"
                type="text"
                className="xs:col-span-2"
                errors={errors}
              />
              <div className="grid gap-4 grid-cols-2 sm:gap-4">
                <TextInput
                  lable="Quantity"
                  name="qty"
                  register={register}
                  isRequired="true"
                  type="number"
                  className="xs:col-span-2"
                  errors={errors}
                />
                <SelectInput
                  label="Unit"
                  name="unit"
                  register={register}
                  className="w-full"
                  options={unitOptions}
                />
              </div>
              <div className="grid gap-4 grid-cols-2 sm:gap-4 items-center">
                <div className="space-x-2 ">
                  <Label
                    htmlFor="retail"
                    className="block mb-2 ml-2 text-sm font-medium text-red-600 dark:text-white"
                  >
                    Retail ?
                  </Label>
                  <Switch
                    id="retail"
                    className=" data-[state=checked]:bg-blue-700 data-[state=unchecked]:bg-neutral-300 "
                  />
                </div>

                <div className="flex items-end">
                  <TextInput
                    lable="Amount"
                    name="amount"
                    register={register}
                    isRequired="true"
                    type="number"
                    className="xs:col-span-2"
                    errors={errors}
                  />
                  <h2 className="ml-3 pb-1 text-lg text-slate-500">pcs</h2>
                </div>
              </div>
              <div className="grid gap-4 grid-cols-2 sm:gap-4">
                <TextInput
                  lable="Buying Price"
                  name="buyprice"
                  register={register}
                  isRequired="true"
                  type="number"
                  className="xs:col-span-2"
                  errors={errors}
                />
                <TextInput
                  lable="Selling Price"
                  name="sellprice"
                  register={register}
                  isRequired="true"
                  type="number"
                  className="xs:col-span-2"
                  errors={errors}
                />
              </div>

              <div className="grid gap-4 grid-cols-2 sm:gap-4">
                <TextInput
                  lable="Re-Order Point"
                  name="reOrderPoint"
                  register={register}
                  isRequired="true"
                  type="number"
                  className="xs:col-span-2"
                  errors={errors}
                />
              </div>
              <SelectInput
                label="Supplier"
                name="supplier"
                register={register}
                className="w-full"
                options={supplierOptions}
              />
              <div className="grid gap-4 grid-cols-2 sm:gap-4 items-center">
                <div className="space-x-2">
                  <Label
                    htmlFor="tax"
                    className="block mb-2 ml-2 text-sm font-medium text-red-600 dark:text-white"
                  >
                    Tax ?
                  </Label>
                  <Switch
                    id="tax"
                    className=" data-[state=checked]:bg-blue-700 data-[state=unchecked]:bg-neutral-300 "
                  />
                </div>
                <div className="flex items-end">
                  <TextInput
                    lable="Tax rate in %"
                    name="tax"
                    register={register}
                    isRequired="true"
                    type="number"
                    className="xs:col-span-2"
                    errors={errors}
                  />
                  <h2 className="ml-3 pb-1 text-2xl text-slate-500">%</h2>
                </div>
              </div>
              <SelectInput
                label="Warehouse"
                name="warehouse"
                register={register}
                className="w-full"
                options={warehouseOptions}
              />
            </div>
            <TextArea
              id="note"
              name="note"
              label="Item Note"
              rows="4"
              register={register}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Write item notes here"
            ></TextArea>
            <TextArea
              id="description"
              label="Item Description"
              name="description"
              rows="4"
              register={register}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Write item description here"
            ></TextArea>
            <UploadImage
              label="Upload Item Image"
              setImageUrl={setImageUrl}
              imageUrl={imageUrl}
              endpoint="imageUploader"
            />

            <button
              type="submit"
              className="w-full text-slate-50 inline-flex items-center justify-center bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <svg
                className="mr-1 -ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Save New Product
            </button>
          </form>
        </div>
      </div>
      {/* Bottom */}
    </div>
  );
}
