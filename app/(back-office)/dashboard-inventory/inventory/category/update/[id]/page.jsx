import React from "react";

import { getData } from "@/lib/getData";
import NewCategory from "../../new/page";

export default async function Update({ params: { id } }) {
  const data = await getData(`category/${id}`);
  console.log(data);
  return <NewCategory selectedData={data} isUpdate={true} />;
}
