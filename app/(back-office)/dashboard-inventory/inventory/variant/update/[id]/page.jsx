import React from "react";

import { getData } from "@/lib/getData";
import NewVariant from "../../new/page";

export default async function Update({ params: { id } }) {
  const data = await getData(`variant/${id}`);
  console.log(data);
  return <NewVariant selectedData={data} isUpdate={true} />;
}
