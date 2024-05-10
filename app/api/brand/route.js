import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    const brand = await db.brand.create({
      data: {
        title,
        description,
      },
    });

    return NextResponse.json(brand);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to create New Brand",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const brands = await db.brand.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(brands);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to get Brand",
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
    const deleteBrand = await db.brand.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deleteBrand);
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
