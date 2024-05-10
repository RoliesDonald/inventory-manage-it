import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      title,
      warehouseType,
      province,
      city,
      distric,
      subDistric,
      detail,
    } = await request.json();
    const warehouse = await db.warehouse.create({
      data: {
        title,
        warehouseType,
        province,
        city,
        distric,
        subDistric,
        detail,
      },
    });
    console.log(warehouse);
    return NextResponse.json(warehouse);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to create Warehouse",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const warehouse = await db.warehouse.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log(warehouse);
    return NextResponse.json(warehouse);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to get Warehouse Data",
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
    const deleteWarehouse = await db.warehouse.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deleteWarehouse);
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
