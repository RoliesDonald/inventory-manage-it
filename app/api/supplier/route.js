import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      title,
      phone,
      email,
      province,
      city,
      distric,
      subdistrict,
      addressDetail,
      contactPerson,
      supplierCode,
      paymentTerms,
      taxID,
      notes,
    } = await request.json();
    const suppliers = await db.supplier.create({
      data: {
        title,
        phone,
        email,
        province,
        city,
        distric,
        subdistrict,
        addressDetail,
        contactPerson,
        supplierCode,
        paymentTerms,
        taxID,
        notes,
      },
    });
    console.log(suppliers);
    return NextResponse.json(suppliers);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to create Supplier",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const suppliers = await db.supplier.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log(suppliers);
    return NextResponse.json(suppliers);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to get Supplier Data",
      },
      {
        status: 500,
      }
    );
  }
}
