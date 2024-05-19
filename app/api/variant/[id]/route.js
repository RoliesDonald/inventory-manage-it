import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const variant = await db.variant.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(variant);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to get Variant",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    const { title, description } = await request.json();
    const variant = await db.variant.update({
      where: {
        id,
      },
      data: {
        title,
        description,
      },
    });
    // console.log(variant);
    return NextResponse.json(variant);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to update Variant",
      },
      {
        status: 500,
      }
    );
  }
}
