import Link from "next/link";
import React from "react";



export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <h2 className="text-3xl mb-8">Factory Management System</h2>
      <div className="flex gap-10">
        <div className="h-40 w-60 flex justify-center items-center border-4 p-10"><Link href="/dashboard/inventory">Inventory</Link></div>
        <div className="h-40 w-60 flex justify-center items-center border-4 p-10"><Link href="/dashboard/attendance">Attendance</Link></div>
        <div className="h-40 w-60 flex justify-center items-center border-4 p-10"><Link href="/dashboard/production">Production</Link></div>

      </div>
    </div> 
  );
}
