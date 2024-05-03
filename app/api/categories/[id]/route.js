import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const category = await db.category.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(category);
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
    const category = await db.category.update({
      where: {
        id,
      },
      data: {
        title,
        description,
      },
    });
    // console.log(category);
    return NextResponse.json(category);
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

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    const deleteCategory = await db.category.delete({
      where: {
        id,
      },
    });
    console.log(deleteCategory);
    return NextResponse.json(deleteCategory);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to Delete Categories",
      },
      {
        status: 500,
      }
    );
  }
}
