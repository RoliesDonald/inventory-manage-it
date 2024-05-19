// import { NextResponse } from "next/server";

// export async function POST(request) {
//   try {
//     const {
//       category,
//       itemName,
//       brand,
//       addStockQty,
//       transferfrom,
//       transferto,
//       notes,
//     } = await request.json();
//     const units = {
//       category,
//       itemName,
//       brand,
//       addStockQty,
//       transferfrom,
//       transferto,
//       notes,
//     };
//     console.log(adjusment);
//     return NextResponse.json(adjusment);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       {
//         error,
//         message: "failed to create Units",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }

// export async function GET(request) {
//   try {
//     const addStock = await db.addStockAdjusment.findMany({
//       orderBy: {
//         createdAt: "desc",
//       },
//     });
//     // console.log(items);
//     return NextResponse.json(addStock);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       {
//         error,
//         message: "failed to get Add Item Data",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }

// export async function DELETE(request) {
//   // const searchParams = useSearchParams();
//   try {
//     const id = request.nextUrl.searchParams.get("id");
//     // console.log(id);
//     const deleteValAdj = await db.addStockAdjusment.delete({
//       where: {
//         id,
//       },
//     });
//     return NextResponse.json(deleteValAdj);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       { error, message: "failed to delete Value Adjusment" },
//       {
//         status: 500,
//       }
//     );
//   }
// }
