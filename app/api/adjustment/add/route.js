import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { category, itemName, brand, addStockQty, refNum, notes } =
      await request.json();
    const addStockAdjusment = await db.addStockAdjusment.create({
      data: {
        category,
        itemName,
        brand,
        addStockQty,
        refNum,
        notes,
      },
    });

    console.log(addStockAdjusment);
    return NextResponse.json(addStockAdjusment);
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
