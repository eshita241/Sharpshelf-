import Link from "next/link";
import React from "react";



export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <h2 className="text-3xl mb-8">Factory Management System</h2>
      <div className="flex gap-10">
      <Link href="/dashboard/inventory"><div className="h-40 w-60 flex justify-center items-center border-4 border-neutral-950 rounded-3xl p-10 text-xl font-semibold hover:bg-slate-600 hover:bg-opacity-20">Inventory</div></Link>
      <Link href="/dashboard/attendance"><div className="h-40 w-60 flex justify-center items-center border-4 border-neutral-950 rounded-3xl p-10 text-xl font-semibold hover:bg-slate-600 hover:bg-opacity-20">Attendance</div></Link>
      <Link href="/dashboard/production"><div className="h-40 w-60 flex justify-center items-center border-4 border-neutral-950 rounded-3xl p-10 text-xl font-semibold hover:bg-slate-600 hover:bg-opacity-20">Production</div></Link>

      </div>
    </div> 
  );
}
