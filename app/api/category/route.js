import db from "@/lib/db";
import { useSearchParams } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    const category = await db.category.create({
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
        message: "failed to create Category",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const categories = await db.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    // console.log(categories);
    return NextResponse.json(categories);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to get Categories",
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
    const deleteCategory = await db.category.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deleteCategory);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: "failed to delete Categories" },
      {
        status: 500,
      }
    );
  }
}
