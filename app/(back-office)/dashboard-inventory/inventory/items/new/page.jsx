import React from "react";
import NewItem from "@/components/dashboard/NewItem";

export default async function Page() {
  const data = {};
  return <NewItem selectedData={data} isUpdate={false} />;
}
