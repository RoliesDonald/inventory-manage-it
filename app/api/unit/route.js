import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, abreviation } = await request.json();
    const unit = await db.unit.create({
      data: {
        title,
        abreviation,
      },
    });
    console.log(unit);
    return NextResponse.json(unit);
  } catch (errors) {
    console.log(errors);
    return NextResponse.json(
      {
        errors,
        message: "failed to create Units",
      },
      {
        status: 500,
      }
    );
  }
}
export async function GET(request) {
  try {
    const units = await db.unit.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log(units);
    return NextResponse.json(units);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to get units",
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
    const deleteUnit = await db.unit.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deleteUnit);
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
