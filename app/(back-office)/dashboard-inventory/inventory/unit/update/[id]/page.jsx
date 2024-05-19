import React from "react";

import { getData } from "@/lib/getData";
import NewUnit from "../../new/page";

export default async function Update({ params: { id } }) {
  const data = await getData(`unit/${id}`);
  console.log(data);
  return <NewUnit selectedData={data} isUpdate={true} />;
}
