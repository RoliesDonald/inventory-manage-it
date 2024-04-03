"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SelectInput from "@/components/form-input/SelectInput";
import SubmitBtn from "@/components/form-input/SubmitBtn";
import TextArea from "@/components/form-input/TextArea";
import TextInput from "@/components/form-input/TextInput";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewWarehouse() {
  const warehouseOption = [
    {
      label: "Main Warehouse",
      value: "Main Warehouse",
    },
    {
      label: "Branch Warehouse",
      value: "Branch Warehouse",
    },
  ];

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
    try {
      const response = await fetch(`${baseURL}/api/warehouse`, {
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
    <div className="justify-between w-full p-4 ">
      {/* Header */}
      <FormHeader
        title="Warehouse"
        href="/dashboard-inventory/inventory/unit"
      />
      {/* Form */}
      <div className="relative p-4 w-full h-full md:h-auto">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-4">
              <TextInput
                lable="Warehouse Name"
                name="title"
                register={register}
                errors={errors}
                className="w-full"
              />
              <SelectInput
                label="Warehouse Type"
                name="type"
                register={register}
                errors={errors}
                className="w-full"
                options={warehouseOption}
              />

              <SelectInput
                label="Province"
                name="location"
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

            <TextArea
              label="Detail"
              name="detail"
              register={register}
              errors={errors}
              className="mt-4"
            />
            <SubmitBtn isLoading={loading} title="Save New Warehouse" />
          </form>
        </div>
      </div>

      {/* Bottom */}
    </div>
  );
}
