"use client";
import SelectInput from "@/components/form-input/SelectInput";
import SubmitBtn from "@/components/form-input/SubmitBtn";
import TextArea from "@/components/form-input/TextArea";
import TextInput from "@/components/form-input/TextInput";
import { makeApiRequest } from "@/lib/apiRequest";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function TransferInventoryForm({
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
    makeApiRequest(setLoading, "api/adjustment/transfer", data, "Trans", reset);
  }

  return (
    <div className="justify-between w-full px-4 dark:border-gray-600">
      {/* Form */}
      <div className=" px-4 w-full h-full md:h-auto">
        <div className=" p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <div className="items-center text-slate-50 text-lg text-center flex justify-center">
            <span>No :</span>
            <h2 className="p-1 bg-blue-500 rounded-lg px-6 ml-3" name="refNum">
              TFSTK-00020/14/XI/2024
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
                lable="Amount to Transfer"
                name="transferStockQty"
                register={register}
                type="number"
                errors={errors}
                className="w-full"
              />
              <SelectInput
                label="Transfer from :"
                name="senderWarehouseId"
                register={register}
                errors={errors}
                className="w-full"
                options={warehouse}
              />

              <SelectInput
                label="Transfer to :"
                name="receiverWarehouseId"
                register={register}
                errors={errors}
                className="w-full"
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
            <SubmitBtn isLoading={loading} title="Create New Transfer" />
          </form>
        </div>
      </div>

      {/* Bottom */}
    </div>
  );
}
