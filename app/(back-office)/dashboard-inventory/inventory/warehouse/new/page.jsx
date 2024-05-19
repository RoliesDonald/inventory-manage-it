"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SelectInput from "@/components/form-input/SelectInput";
import SubmitBtn from "@/components/form-input/SubmitBtn";
import TextArea from "@/components/form-input/TextArea";
import TextInput from "@/components/form-input/TextInput";
import { makeApiRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function NewWarehouse({ selectedData = {}, isUpdate = false }) {
  console.log(selectedData);
  const router = useRouter();
  const warehouseOption = [
    {
      title: "Main Warehouse",
      value: "Main Warehouse",
    },
    {
      title: "Branch Warehouse",
      value: "Branch Warehouse",
    },
    {
      title: "Mobile Warehouse",
      value: "Mobile Warehouse",
    },
  ];

  const province = [
    {
      title: "DKI Jakarta",
      value: "DKI Jakarta",
    },
    {
      title: "Jawa Tengah",
      value: "Jawa Tengah",
    },
    {
      title: "Jawa Barat",
      value: "Jawa Barat",
    },
    {
      title: "Jawa Timur",
      value: "Jawa Timur",
    },
  ];

  const city = [
    {
      title: "Jakarta Timur",
      value: "Jakarta Timur",
    },
    {
      title: "Semarang",
      value: "Semarang",
    },

    {
      title: "Surabaya",
      value: "Surabaya",
    },
    {
      title: "Kab.Sidoarjo",
      value: "Kab.Sidoarjo",
    },
  ];

  const distric = [
    {
      title: "Cipinang",
      value: "Cipinang",
    },
    {
      title: "Kp. Melayu",
      value: "Kp. Melayu",
    },
    {
      title: "Ngaliyan",
      value: "Ngaliyan",
    },
    {
      title: "Cicaheum",
      value: "Cicaheum",
    },
    {
      title: "Candi",
      value: "Candi",
    },
  ];
  const subDistric = [
    {
      title: "Duren Sawit",
      value: "Duren Sawit",
    },
    {
      title: "Kelapa Gading",
      value: "Kelapa Gading",
    },
    {
      title: "Tegalega",
      value: "Tegalega",
    },
    {
      title: "Podorejo",
      value: "Podorejo",
    },
    {
      title: "Citra Sentosa Mandiri",
      value: "Citra Sentosa Mandiri",
    },
  ];

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: selectedData });
  const [loading, setLoading] = useState(false);

  function redirect() {
    router.replace("/dashboard-inventory/inventory/warehouse");
  }
  async function onSubmit(data) {
    console.log(data);
    setLoading(true);
    if (isUpdate) {
      makePutRequest(
        setLoading,
        `api/warehouse/${selectedData.id}`,
        data,
        "warehouses",
        redirect,
        reset
      );
    } else {
      makeApiRequest(setLoading, "api/warehouse", data, "Warehouse", reset);
    }
  }
  return (
    <div className="justify-between w-full p-4 border-b border-gray-200 dark:border-gray-600">
      {/* Header */}
      <FormHeader
        title={isUpdate ? "Update Warehouse" : "New Warehouse"}
        href="/dashboard-inventory/inventory/warehouse"
      />
      {/* Form */}
      <div className="relative py-2 w-full h-full md:h-auto">
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
              <TextInput
                lable="Stock"
                name="stockQty"
                register={register}
                isRequired="true"
                type="number"
                className="xs:col-span-2"
                errors={errors}
              />
              <SelectInput
                label="Warehouse Type"
                name="warehouseType"
                register={register}
                errors={errors}
                className="w-full"
                options={warehouseOption}
              />

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
                name="subDistric"
                register={register}
                errors={errors}
                className="w-full"
                options={subDistric}
              />
            </div>

            <TextArea
              label="Detail"
              name="detail"
              register={register}
              errors={errors}
              className="mt-4"
            />
            <SubmitBtn
              isLoading={loading}
              title={isUpdate ? "Update Warehouse" : "New Warehouse"}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
