import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const type = await db.type.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(type);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to get Category",
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
    const type = await db.type.update({
      where: {
        id,
      },
      data: {
        title,
        description,
      },
    });
    // console.log(type);
    return NextResponse.json(type);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to update Category",
      },
      {
        status: 500,
      }
    );
  }
}
