import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      category,
      itemName,
      brand,
      addStockQty,
      transferfrom,
      transferto,
      notes,
    } = await request.json();
    const units = {
      category,
      itemName,
      brand,
      addStockQty,
      transferfrom,
      transferto,
      notes,
    };
    console.log(adjusment);
    return NextResponse.json(adjusment);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to create Units",
      },
      {
        status: 500,
      }
    );
  }
}
