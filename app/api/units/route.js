import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, abreviation } = await request.json();
    const units = { title, abreviation };
    console.log(units);
    return NextResponse.json(units);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to create Units",
      },
      {
        status: 500,
      }
    );
  }
}
