"use client";

import SelectInput from "@/components/form-input/SelectInput";
import TextArea from "@/components/form-input/TextArea";
import TextInput from "@/components/form-input/TextInput";
import UploadImage from "@/components/form-input/UploadImage";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { makeApiRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SubmitBtn from "../form-input/SubmitBtn";

export default function CreateItemForm({
  category,
  unit,
  brand,
  warehouse,
  supplier,
  selectedData = {},
  isUpdate = false,
}) {
  const [imageUrl, setImageUrl] = useState(selectedData.imageUrl);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: selectedData });
  const [loading, setLoading] = useState(false);

  function redirect() {
    router.push("/dashboard-inventory/inventory/items");
  }

  async function onSubmit(data) {
    data.imageUrl = imageUrl;
    console.log(data);
    setLoading(true);
    if (isUpdate) {
      makePutRequest(
        setLoading,
        `api/items/${selectedData.id}`,
        data,
        "Item",
        redirect,
        reset
      );
    } else {
      makeApiRequest(setLoading, "api/items", data, "Item", reset);
      setImageUrl("");
    }
  }
  return (
    <div className="justify-between w-full border-b border-gray-200 dark:border-gray-600">
      {/* Form */}
      <div className=" py-4 w-full h-full md:h-auto">
        <div className=" p-4 bg-white rounded-lg shadow  dark:bg-gray-800 sm:p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-4 ">
              <TextInput
                lable="Part Name"
                name="title"
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
              <SelectInput
                label="Part Brand"
                name="brandId"
                register={register}
                className="w-full"
                options={brand}
              />
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

            <SubmitBtn
              isLoading={loading}
              title={isUpdate ? "Update Item" : "New Item"}
            />
          </form>
        </div>
      </div>
      {/* Bottom */}
    </div>
  );
}
