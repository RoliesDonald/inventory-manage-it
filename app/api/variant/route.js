import db from "@/lib/db";
import { useSearchParams } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    const variant = await db.variant.create({
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
        message: "failed to create Variant",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const variant = await db.variant.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    // console.log(categories);
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

export async function DELETE(request) {
  // const searchParams = useSearchParams();
  try {
    const id = request.nextUrl.searchParams.get("id");
    // console.log(id);
    const deleteVariant = await db.variant.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deleteVariant);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: "failed to delete Variant" },
      {
        status: 500,
      }
    );
  }
}
