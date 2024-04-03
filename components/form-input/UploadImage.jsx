import { UploadDropzone } from "@/lib/uploadthing";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function UploadImage({
  label,
  imageUrl = "",
  setImageUrl,
  endpoint = "imageUploader",
  className = "col-span-full mt-4 border p-2 rounded-lg dark:bg-slate-700 bg-slate-300",
}) {
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4 ">
        <label
          htmlFor="itemImage"
          className="block text-sm font-medium leading text-gray-900 dark:text-gray-50"
        >
          {label}
        </label>
        {imageUrl && (
          <button
            onClick={() => setImageUrl("")}
            type="button"
            className="flex space-x-2 bg-slate-900 rounded-md shadow text-slate-600"
          >
            <Pencil className="w-5 h-5" />
            <span>Change Image</span>
          </button>
        )}
      </div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Part Image"
          width={1000}
          height={667}
          className="w-full h-64 object-contain"
        />
      ) : (
        <UploadDropzone
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            //Do Something with response
            console.log("Files: ", res);
            setImageUrl(res[0].url);
            alert("Upload Completed");
          }}
          onUploadError={(error) => {
            //Do Something with Error.
            alert(`ERROR! ${error.message}`);
          }}
        />
      )}
    </div>
  );
}
