import Link from "next/link";
import React from "react";



export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <div className="flex gap-10">
      <Link href="/dashboard/inventory/rawMaterials"><div className="h-40 w-60 flex justify-center items-center border-4 p-10 border-zinc-950 rounded-3xl text-xl font-semibold hover:bg-slate-600 hover:bg-opacity-20">Raw Materials</div></Link>
      <Link href="/dashboard/inventory/parts"><div className="h-40 w-60 flex justify-center items-center border-4 p-10 border-zinc-950 rounded-3xl text-xl font-semibold hover:bg-slate-600 hover:bg-opacity-20 ">Spare Parts</div></Link>

      </div>
    </div> 
  );
}
