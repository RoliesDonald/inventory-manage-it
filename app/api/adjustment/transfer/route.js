import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      category,
      brand,
      itemName,
      transferStockQty,
      warehouseId,
      transferTo,
      notes,
    } = await request.json();
    const transfer = await db.transferStockAdjusment.create({
      data: {
        category,
        brand,
        itemName,
        transferStockQty,
        warehouseId,
        transferTo,
        notes,
      },
    });
    console.log(transfer);
    return NextResponse.json(transfer);
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