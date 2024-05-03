import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const warehouse = await db.warehouse.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(warehouse);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to get WareHouse",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(request, { params: { id } }) {
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
    const warehouse = await db.warehouse.update({
      where: {
        id,
      },
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
        message: "failed to update Unit",
      },
      {
        status: 500,
      }
    );
  }
}
