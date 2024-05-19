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

export default function NewCategory({ selectedData = {}, isUpdate = false }) {
  console.log(selectedData);
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
    router.replace("/dashboard-inventory/inventory/category");
  }

  async function onSubmit(data) {
    console.log(data);
    setLoading(true);
    if (isUpdate) {
      makePutRequest(
        setLoading,
        `api/category/${selectedData.id}`,
        data,
        "Category",
        redirect,
        reset
      );
    } else {
      makeApiRequest(setLoading, "api/category", data, "Category", reset);
    }
  }
  return (
    <div className="justify-between w-full p-4">
      {/* Header */}
      <FormHeader
        title={isUpdate ? "Update Category" : "New Category"}
        href="/dashboard-inventory/inventory/category"
      />
      {/* Form */}
      <div className="relative py-2 w-full h-full md:h-auto">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 sm:grid-cols-3 sm:gap-4">
              <TextInput
                lable="Category"
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
              title={isUpdate ? "Update Category" : "New Category"}
            />
          </form>
        </div>
      </div>

      {/* Bottom */}
    </div>
  );
}
