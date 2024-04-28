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
