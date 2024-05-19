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
        // warehouseId: itemData.warehouseId,
        transferStockQty: parseInt(itemData.transferStockQty),
        refNum: itemData.refNum,
        notes: itemData.notes,
      },
    });

    // get the giving warehouse
    const senderWarehouse = await db.warehouse.findUnique({
      where: {
        id: itemData.senderWarehouseId,
      },
    });

    // get current stock
    const currentSenderWarehouseStock = senderWarehouse.stockQty;
    if (
      parseInt(currentSenderWarehouseStock) >
      parseInt(itemData.transferStockQty)
    ) {
      const newStockforSenderWarehouse =
        parseInt(currentSenderWarehouseStock) -
        parseInt(itemData.transferStockQty);

      // update stock
      const updatedSenderWarehouse = await db.warehouse.update({
        where: {
          id: itemData.senderWarehouseId,
        },
        data: {
          stockQty: newStockforSenderWarehouse,
        },
      });

      // get the receiving warehouse
      const receivingWarehouse = await db.warehouse.findUnique({
        where: {
          id: itemData.receiverWarehouseId,
        },
      });

      // get current stock
      const currentReceivingWarehouseStock = receivingWarehouse.stockQty;
      const newStockforReceivingWarehouse =
        parseInt(currentReceivingWarehouseStock) +
        parseInt(itemData.transferStockQty);

      // update stock
      const updatedReceivingWarehouse = await db.warehouse.update({
        where: {
          id: itemData.receiverWarehouseId,
        },
        data: {
          stockQty: newStockforReceivingWarehouse,
        },
      });

      console.log(transferStock);
      return NextResponse.json(transferStock);
    } else {
      return NextResponse.json(
        {
          data: null,
          message: "There's Not Enough Stock to Transfer",
        },
        { status: 409 }
      );
    }
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
    const transferStock = await db.transferStockAdjusment.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: { items: true },
    });
    // console.log(items);
    return NextResponse.json(transferStock);
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

export async function DELETE(request) {
  // const searchParams = useSearchParams();
  try {
    const id = request.nextUrl.searchParams.get("id");
    // console.log(id);
    const deleteTransferStock = await db.transferStockAdjusment.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deleteTransferStock);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: "failed to delete Transfer Stock" },
      {
        status: 500,
      }
    );
  }
}
