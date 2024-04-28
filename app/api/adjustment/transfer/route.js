import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const itemData = await request.json();
    const transferStock = await db.transferStockAdjusment.create({
      data: {
        itemId: itemData.itemId,
        senderWarehouseId: itemData.senderWarehouseId,
        receiverWarehouseId: itemData.receiverWarehouseId,
        transferStockQty: parseInt(itemData.transferStockQty),
        refNum: itemData.refNum,
        notes: itemData.notes,
      },
    });

    console.log(transferStock);
    return NextResponse.json(transferStock);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to create Transfer Item",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const transferStockAdjusment = await db.transferStockAdjusment.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    // console.log(items);
    return NextResponse.json(transferStockAdjusment);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to get transfer Data",
      },
      {
        status: 500,
      }
    );
  }
}
