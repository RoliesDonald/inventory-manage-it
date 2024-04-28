"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitBtn from "@/components/form-input/SubmitBtn";
import TextArea from "@/components/form-input/TextArea";
import TextInput from "@/components/form-input/TextInput";
import { makeApiRequest } from "@/lib/apiRequest";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function NewUnit() {
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
    makeApiRequest(setLoading, "api/units", data, "Unit", reset);
  }
  return (
    <div className="justify-between w-full p-4 border-b border-gray-200 dark:border-gray-600">
      {/* Header */}
      <FormHeader title="New Unit" href="/dashboard-inventory/inventory/unit" />
      {/* Form */}
      <div className="relative py-2 w-full h-full md:h-auto">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 sm:grid-cols-1 sm:gap-4">
              <TextInput
                lable="Unit Name"
                name="title"
                register={register}
                errors={errors}
              />
            </div>

            <TextInput
              lable="Abreviation"
              name="abreviation"
              register={register}
              errors={errors}
              className="mt-4"
              isRequired="true"
            />
            <SubmitBtn isLoading={loading} title="Save New Unit" />
          </form>
        </div>
      </div>

      {/* Bottom */}
    </div>
  );
}
