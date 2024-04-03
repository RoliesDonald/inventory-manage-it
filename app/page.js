import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <h1 className="2 text-3xl">
        Inventory management Software
      </h1>
      <Link href="/dashboard-inventory/home/dashboard">Click To Dashboard</Link>
    </div>
  );
}
