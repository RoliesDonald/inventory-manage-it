import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const itemData = await request.json();
    // get the item
    const itemToUpdate = await db.items.findUnique({
      where: {
        id: itemData.itemId,
      },
    });

    // get current item stock qty
    const currentItemQty = itemToUpdate.quantity;
    const newQty = parseInt(currentItemQty) + parseInt(itemData.addStockQty);

    // updated stock item qty to new qty
    const updatedStockItem = await db.items.update({
      where: {
        id: itemData.itemId,
      },
      data: {
        quantity: newQty,
      },
    });
    //get the warehouse
    const warehouse = await db.warehouse.findUnique({
      where: {
        id: itemData.warehouseId,
      },
    });

    // get current stock of the warehouse
    const currentWarehouseStock = warehouse.stockQty;
    const newStockQty =
      parseInt(currentWarehouseStock) + parseInt(itemData.addStockQty);
    // update the stock on the warehouse
    const updatedWarehouseStock = await db.warehouse.update({
      where: {
        id: itemData.warehouseId,
      },
      data: {
        stockQty: newStockQty,
      },
    });
    // console.log(updatedStockItem);

    const addStockAdjusment = await db.AddStockAdjusment.create({
      data: {
        itemId: itemData.itemId,
        categoryId: itemData.categoryId,
        warehouseId: itemData.warehouseId,
        brandId: itemData.brandId,
        addStockQty: parseInt(itemData.addStockQty),
        refNum: itemData.refNum,
        notes: itemData.notes,
        supplierId: itemData.supplierId,
      },
    });

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
    // const itemData = await request.json();
    const addStockAdjusment = await db.addStockAdjusment.findMany({
      orderBy: {
        createdAt: "desc",
      },

      include: {
        brand: true,
        items: true,
        supplier: true,
      },
    });
    // console.log(addStockAdjusment);
    return NextResponse.json(addStockAdjusment);
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

export async function DELETE(request) {
  // const searchParams = useSearchParams();
  try {
    const id = request.nextUrl.searchParams.get("id");

    const deleteAddTransfer = await db.addStockAdjusment.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deleteAddTransfer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: "failed to delete Added Adjusment" },
      {
        status: 500,
      }
    );
  }
}
