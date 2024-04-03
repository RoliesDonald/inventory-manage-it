import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    const brands = { title, description };
    console.log(brands);
    return NextResponse.json(brands);
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
