import Link from "next/link";
import React from "react";



export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <div className="flex gap-10">
        <div className="h-40 w-60 flex justify-center items-center border-4 p-10 border-zinc-950 rounded-2xl text-xl font-bold "><Link href="/dashboard/inventory/rawMaterials">Raw Materials</Link></div>
        <div className="h-40 w-60 flex justify-center items-center border-4 p-10 border-zinc-950 rounded-2xl text-xl font-bold "><Link href="/dashboard/inventory/parts">Spare Parts</Link></div>

      </div>
    </div> 
  );
}
