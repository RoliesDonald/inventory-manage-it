import React from "react";
import NewBrand from "../../new/page";
import { getData } from "@/lib/getData";

export default async function Update({ params: { id } }) {
  const data = await getData(`brand/${id}`);
  console.log(data);
  return <NewBrand selectedData={data} isUpdate={true} />;
}
