"use client";

import SelectInput from "@/components/form-input/SelectInput";
import TextArea from "@/components/form-input/TextArea";
import TextInput from "@/components/form-input/TextInput";
import UploadImage from "@/components/form-input/UploadImage";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { makeApiRequest } from "@/lib/apiRequest";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function CreateItemForm({
  category,
  unit,
  brand,
  warehouse,
  supplier,
}) {
  const [imageUrl, setImageUrl] = useState("");

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
    // setLoading(true);
    makeApiRequest(setLoading, "api/items", data, "Item", reset);
    setImageUrl("");
  }
  return (
    <div className="justify-between w-full p-4 border-b border-gray-200 dark:border-gray-600">
      {/* Form */}
      <div className=" p-4 w-full h-full md:h-auto space--5">
        <div className=" p-4 bg-white rounded-lg shadow  dark:bg-gray-800 sm:p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-4 ">
              <TextInput
                lable="Part Name"
                name="partName"
                register={register}
                isRequired="true"
                type="text"
                className="xs:col-span-2"
                errors={errors}
              />
              <TextInput
                lable="Part Number"
                name="partNum"
                register={register}
                isRequired="true"
                type="text"
                className="xs:col-span-2"
                errors={errors}
              />
              {/* <SelectInput
                label="Part Brand"
                name="brandId"
                register={register}
                className="w-full"
                options={brand}
              /> */}
              <SelectInput
                label="Category"
                name="categoryId"
                register={register}
                className="w-full"
                options={category}
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
                  name="quantity"
                  register={register}
                  isRequired="true"
                  type="number"
                  className="xs:col-span-2"
                  errors={errors}
                />
                <SelectInput
                  label="Unit"
                  name="unitId"
                  register={register}
                  className="w-full"
                  options={unit}
                />
              </div>
              <div className="grid gap-4 grid-cols-2 sm:gap-4 items-center">
                <div className="space-x-2 ">
                  <Label
                    htmlFor="isRetail"
                    className="block mb-2 ml-2 text-sm font-medium text-red-600 dark:text-white"
                  >
                    Retail ?
                  </Label>
                  <Switch
                    id="retail"
                    name="isRetail"
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
                </div>
              </div>
              <div className="grid gap-4 grid-cols-2 sm:gap-4">
                <TextInput
                  lable="Buying Price"
                  name="buyPrice"
                  register={register}
                  isRequired="true"
                  type="number"
                  className="xs:col-span-2"
                  errors={errors}
                />
                <TextInput
                  lable="Selling Price"
                  name="sellPrice"
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
                name="supplierId"
                register={register}
                className="w-full"
                options={supplier}
              />
              <div className="grid gap-4 grid-cols-2 sm:gap-4 items-center">
                <div className="space-x-2">
                  <Label
                    htmlFor="isTax"
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
                    name="taxRate"
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
                name="warehouseId"
                register={register}
                className="w-full"
                options={warehouse}
              />
            </div>
            <TextArea
              id="note"
              name="itemNote"
              label="Item Note"
              rows="4"
              register={register}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Write item notes here"
            ></TextArea>
            <TextArea
              id="description"
              label="Item Description"
              name="itemDesc"
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
