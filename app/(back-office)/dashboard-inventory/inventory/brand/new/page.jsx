"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitBtn from "@/components/form-input/SubmitBtn";
import TextArea from "@/components/form-input/TextArea";
import TextInput from "@/components/form-input/TextInput";
import { makeApiRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function NewBrand({ selectedData = {}, isUpdate = false }) {
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
    router.replace("/dashboard-inventory/inventory/brand");
  }

  async function onSubmit(data) {
    console.log(data);
    setLoading(true);
    if (isUpdate) {
      // update data
      makePutRequest(
        setLoading,
        `api/brand/${selectedData.id}`,
        data,
        "Brand",
        redirect,
        reset
      );
    } else {
      // this is post data
      makeApiRequest(setLoading, "api/brand", data, "brand", reset);
    }
  }
  return (
    <div className="justify-between w-full p-4 border-b border-gray-200 dark:border-gray-600">
      {/* Header */}
      <FormHeader
        title={isUpdate ? "Update Brand" : "New Brand"}
        href="/dashboard-inventory/inventory/brand"
      />
      {/* Form */}
      <div className="relative py-2 w-full h-full md:h-auto">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 sm:grid-cols-1 sm:gap-4">
              <TextInput
                lable="Brand"
                name="title"
                register={register}
                errors={errors}
              />
            </div>

            <TextArea
              label="Description"
              name="description"
              register={register}
              errors={errors}
              className="mt-4"
            />
            <SubmitBtn
              isLoading={loading}
              title={isUpdate ? "Updated Brand" : "New Brand"}
            />
          </form>
        </div>
      </div>

      {/* Bottom */}
    </div>
  );
}
