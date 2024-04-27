import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const itemData = await request.json();
    console.log(itemData);
    const addStockAdjusment = await db.AddStockAdjusment.create({
      data: {
        itemId: itemData.itemId,
        categoryId: itemData.categoryId,
        warehouseId: itemData.warehouseId,
        brandId: itemData.brandId,
        addStockQty: parseInt(itemData.addStockQty),
        refNum: itemData.refNum,
        notes: itemData.notes,
      },
    });

    console.log(addStockAdjusment);
    return NextResponse.json(addStockAdjusment);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to create Add Item",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const addStock = await db.addStockAdjusment.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    // console.log(items);
    return NextResponse.json(addStock);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to get Add Item Data",
      },
      {
        status: 500,
      }
    );
  }
}
