import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const itemData = await request.json();

    const itemName = await db.items.create({
      data: {
        title: itemData.title,
        partNum: itemData.partNum,
        brandId: itemData.brandId,
        categoryId: itemData.categoryId,
        barcode: itemData.barcode,
        sku: itemData.sku,
        quantity: parseInt(itemData.quantity),
        unitId: itemData.unitId,
        amount: parseInt(itemData.amount),
        isRetail: itemData.isRetail,
        buyPrice: parseInt(itemData.buyPrice),
        sellPrice: parseInt(itemData.sellPrice),
        reOrderPoint: parseInt(itemData.reOrderPoint),
        supplierId: itemData.supplierId,
        isTax: itemData.isTax,
        taxRate: parseFloat(itemData.taxRate),
        warehouseId: itemData.warehouseId,
        itemNote: itemData.itemNote,
        itemDesc: itemData.itemDesc,
        imageUrl: itemData.imageUrl,
      },
    });

    return NextResponse.json(itemName);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to create New Item",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const itemData = await db.items.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        supplier: true,
        warehouse: true,
        brand: true,
        unit: true,
        category: true,
      },
    });

    return NextResponse.json(itemData);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to get Item Data",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(request) {
  // const searchParams = useSearchParams();
  try {
    const id = request.nextUrl.searchParams.get("id");
    // console.log(id);
    const deleteItem = await db.items.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deleteItem);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: "failed to delete Brand" },
      {
        status: 500,
      }
    );
  }
}
