"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitBtn from "@/components/form-input/SubmitBtn";
import TextArea from "@/components/form-input/TextArea";
import TextInput from "@/components/form-input/TextInput";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function NewCategory() {
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
      const response = await fetch(`${baseURL}/api/categories`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log(response);
        setLoading(false);
        // toast.success("Category Successfully Created!");
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Emilia Gates
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Sure! 8:30pm works great!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        ));
        reset();
      }
    } catch (error) {
      setLoading(false);
      // toast.error("Ups, sorry category unsuccessfully crated...");
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Emilia Gates
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Sure! 8:30pm works great!
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ));
      console.log(error);
    }
  }
  return (
    <div className="justify-between w-full p-4">
      {/* Header */}
      <FormHeader
        title="New Category"
        href="/dashboard-inventory/inventory/category"
      />
      {/* Form */}
      <div className="relative py-2 w-full h-full md:h-auto">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 sm:grid-cols-1 sm:gap-4">
              <TextInput
                lable="Category Title"
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
            <SubmitBtn isLoading={loading} title="Add new category" />
          </form>
        </div>
      </div>

      {/* Bottom */}
    </div>
  );
}
