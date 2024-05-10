import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const unit = await db.unit.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(unit);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to get Unit",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    const { title, abreviation } = await request.json();
    const unit = await db.unit.update({
      where: {
        id,
      },
      data: {
        title,
        abreviation,
      },
    });
    console.log(unit);
    return NextResponse.json(unit);
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
