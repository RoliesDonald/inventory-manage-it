"use client";
import Image from "next/image";
import React from "react";
import piston from "@/public/images/piston.png";
import Link from "next/link";

export default function OptionCard({ optionData }) {
  const { title, descriptions, img, link, linkTitle, enabled } = optionData;
  return (
    <div className="rounded border border-neutral-300 shadow-lg bg-neutral-200 flex flex-col items-center justify-between p-4 space-y-5 w-auto h-auto">
      <h2 className="text-bold text-xl text-center">{title}</h2>
      <div className="w-auto">
        <Image quality={50} src={img} alt="piston" height={50} />
      </div>
      <p display className="text-center flex-grow md:line-clamp-1">
        {descriptions}
      </p>
      {enabled ? (
        <Link
          href={link}
          className="bg-blue-500 px-4 py-2 rounded-lg text-neutral-100 my-4 flex flex-col mt-auto"
        >
          {linkTitle}
        </Link>
      ) : (
        <button
          href={link}
          className="bg-blue-500 px-4 py-2 rounded-lg text-neutral-100 my-4 flex flex-col mt-auto"
        >
          Enabled
        </button>
      )}
    </div>
  );
}
