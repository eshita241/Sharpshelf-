"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeNav(){
    const pathname = usePathname();
    let LinkData = [
        {name: "Home", link:"/dashboard/home/overview"},
        {name: "Inventory", link:"/dashboard/inventory"},
        {name: "Attendance", link:"/dashboard/home/overview"},
        {name: "Production", link:"/dashboard/home/getting-started"},
    ]
    return (
        <div className=" text-slate-950">
            <div>
                <nav className="sticky mt-6">
                <ul className="flex gap-3">
                        {
                            LinkData.map((link,i) => (
                                <Link key={i} href={link.link} className={`${pathname===link.link?"border-2 border-amber-800":"border-b-2 border-blue-950"}`}><li className='flex justify-ends items-center gap-4 py-1 border-b-2 border-blue-500'>
                        {link.name}
                    </li></Link>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}