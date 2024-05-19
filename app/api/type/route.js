import db from "@/lib/db";
import { useSearchParams } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    const type = await db.type.create({
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
    const type = await db.type.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    // console.log(type);
    return NextResponse.json(type);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to get Type",
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
    const deleteType = await db.type.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deleteType);
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
