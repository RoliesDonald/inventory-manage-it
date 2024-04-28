"use client";
import SelectInput from "@/components/form-input/SelectInput";
import SubmitBtn from "@/components/form-input/SubmitBtn";
import TextArea from "@/components/form-input/TextArea";
import TextInput from "@/components/form-input/TextInput";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CurrentDate from "./CurrentDate";
import { makeApiRequest } from "@/lib/apiRequest";
import toast from "react-hot-toast";

export default function AddInventoryForm({
  items,
  warehouse,
  brands,
  category,
}) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    console.log(data);
    setLoading(true);
    makeApiRequest(setLoading, "api/adjustment/add", data, "Add", reset);
  }

  return (
    <div className="justify-between w-full dark:border-gray-600">
      {/* Form */}
      <div className="w-full h-full md:h-auto">
        <div className=" bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <div className="items-center text-slate-50 text-lg text-center flex justify-center">
            <span>No :</span>
            <h2 className="p-1 bg-blue-500 rounded-lg px-6 ml-3" name="refNum">
              ADSTK-00020/
            </h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 py-4">
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-8">
              <TextInput
                lable="Date"
                name="refNum"
                register={register}
                errors={errors}
                className="w-full"
              />
              <SelectInput
                label="Category"
                name="categoryId"
                register={register}
                errors={errors}
                className="w-full"
                options={category}
              />
              <SelectInput
                label="Brand"
                name="brandId"
                register={register}
                errors={errors}
                className="w-full"
                options={brands}
              />
              <SelectInput
                label="Item Name"
                name="itemId"
                register={register}
                errors={errors}
                className="w-full"
                options={items}
              />
              <TextInput
                lable="Amount to Add"
                name="addStockQty"
                register={register}
                type="number"
                errors={errors}
                className="w-full"
              />

              <SelectInput
                label="Warehouse :"
                name="warehouseId"
                register={register}
                errors={errors}
                className="w-full "
                options={warehouse}
              />
            </div>

            <TextArea
              label="Adjustment Notes"
              name="notes"
              register={register}
              errors={errors}
              className="mt-4"
            />
            <SubmitBtn isLoading={loading} title="Create New Adjusment" />
          </form>
        </div>
      </div>

      {/* Bottom */}
    </div>
  );
}
