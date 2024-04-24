"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SelectInput from "@/components/form-input/SelectInput";
import SubmitBtn from "@/components/form-input/SubmitBtn";
import TextArea from "@/components/form-input/TextArea";
import TextInput from "@/components/form-input/TextInput";
import { makeApiRequest } from "@/lib/apiRequest";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function NewSupplier() {
  const province = [
    {
      label: "DKI Jakarta",
      value: "DKI Jakarta",
    },
    {
      label: "Jawa Tengah",
      value: "Jawa Tengah",
    },
  ];

  const city = [
    {
      label: "Jakarta Timur",
      value: "Jakarta Timur",
    },
    {
      label: "Semarang",
      value: "Semarang",
    },
  ];

  const distric = [
    {
      label: "Cipinang",
      value: "Cipinang",
    },
    {
      label: "Kp. Melayu",
      value: "Kp. Melayu",
    },
  ];
  const subdistric = [
    {
      label: "Duren Sawit",
      value: "Duren Sawit",
    },
    {
      label: "Kelapa Gading",
      value: "Kelapa Gading",
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
    console.log(data);
    setLoading(true);
    const baseURL = "http://localhost:3000";
    makeApiRequest(setLoading, "api/supplier", data, "Supplier", reset);
  }
  return (
    <div className="justify-between w-full p-4 ">
      {/* Header */}
      <FormHeader
        title="Supplier"
        href="/dashboard-inventory/inventory/supplier"
      />
      {/* Form */}
      <div className=" p-4 w-full h-full md:h-auto">
        <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 sm:grid-cols-1 mb-4 lg:grid-cols-2 sm:gap-4">
              <TextInput
                lable="Supplier Name"
                name="title"
                register={register}
                errors={errors}
                className="w-full"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-4 mb-2">
              <TextInput
                lable="Phone No."
                name="phone"
                register={register}
                errors={errors}
                className="w-full"
              />
              <TextInput
                lable="Email"
                name="email"
                type="email"
                register={register}
                errors={errors}
                className="w-full"
              />
              <TextInput
                lable="Contact Person"
                name="contactPerson"
                register={register}
                errors={errors}
                className="w-full"
              />
              <TextInput
                lable="Supplier Code"
                name="supplierCode"
                register={register}
                errors={errors}
                className="w-full"
              />
              <TextInput
                lable="Payment Terms"
                name="paymentTerms"
                register={register}
                errors={errors}
                className="w-full"
              />
              <TextInput
                lable="Tax ID"
                name="taxID"
                register={register}
                errors={errors}
                className="w-full"
              />
            </div>
            <div className="relative inline-flex items-center justify-center w-full">
              <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-700 rounded-2xl">
                Address
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:gap-4">
              <SelectInput
                label="Province"
                name="province"
                register={register}
                errors={errors}
                className="w-full"
                options={province}
              />
              <SelectInput
                label="City"
                name="city"
                register={register}
                errors={errors}
                className="w-full"
                options={city}
              />
              <SelectInput
                label="District"
                name="distric"
                register={register}
                errors={errors}
                className="w-full"
                options={distric}
              />
              <SelectInput
                label="Subdistrict"
                name="subdistrict"
                register={register}
                errors={errors}
                className="w-full"
                options={subdistric}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:gap-4">
              <TextArea
                label="Detail Address"
                name="addressDetail"
                register={register}
                errors={errors}
                className="mt-4"
              />
              <TextArea
                label="Notes"
                name="notes"
                register={register}
                errors={errors}
                className="mt-4"
              />
            </div>
            <SubmitBtn isLoading={loading} title="Save New Warehouse" />
          </form>
        </div>
      </div>

      {/* Bottom */}
    </div>
  );
}
