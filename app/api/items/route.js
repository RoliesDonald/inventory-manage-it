import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // partname,
    //   partnum,
    //   brand,
    //   category,
    //   barcode,
    //   sku,
    //   qty,
    //   unit,
    //   amount,
    //   buyprice,
    //   sellprice,
    //   reOrderPoint,
    //   supplier,
    //   tax,
    //   warehouse,
    //   note,
    //   description;

    const data = await request.json();
    console.log(data);
    return NextResponse.json(data);
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
