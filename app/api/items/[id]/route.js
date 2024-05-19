import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const itemData = await db.items.findUnique({
      where: {
        id,
      },
      include: {
        supplier: true,
        warehouse: true,
        brand: true,
        unit: true,
        category: true,
      },
    });
    // console.log(itemData);
    return NextResponse.json(itemData);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to get Item",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    const itemData = await request.json();
    const item = await db.items.update({
      where: {
        id,
      },
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

    return NextResponse.json(item);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to update Item",
      },
      {
        status: 500,
      }
    );
  }
}
