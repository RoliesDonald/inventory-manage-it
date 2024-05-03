"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";

export default function DeleteBtn({ id, endpoint }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();
  async function handleDelete() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(`${baseUrl}/api/${endpoint}?id=${id}`, {
          method: "DELETE",
        });
        router.refresh();
        Swal.fire({
          title: "Deleted!",
          text: "Your data has been deleted successfully.",
          icon: "success",
        });
      }
    });
  }

  return (
    <button
      onClick={handleDelete}
      className="font-medium text-red-600 dark:text-slate-800 hover:underline flex items-center mx-1 dark:bg-slate-300 px-2 rounded"
    >
      <FaRegTrashCan className="w-4 h-4" />
    </button>
  );
}
