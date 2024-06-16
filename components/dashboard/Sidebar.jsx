"use client";
import React from 'react';
import Link from "next/link";
import { GoChevronLeft } from "react-icons/go";
import { usePathname } from "next/navigation";



export default function Sidebar(){
    const pathname = usePathname();
    let LinkDat = [
        {name: "Home", link:"/"},
        {name: "Inventory", link:"/dashboard/inventory"},
        {name: "Attendance", link:"/dashboard/attendance"},
        {name: "Production", link:"/dashboard/production"},
    ]
    return (
            <div className='w-56 min-h-screen bg-slate-900 text-slate-200'>
                <div className='flex flex-col'>
                    <ul>
                        {
                            LinkDat.map((link,i) => (
                                <Link href={link.link} key={i} className={`${pathname===link.link?" text-lime-400":" text-white"}`}><li className='flex justify-ends items-center gap-4 py-5'>
                        <GoChevronLeft/>
                        {link.name}
                    </li></Link>
                            ))
                        }
                    
                    </ul>
                </div>
        </div>
    )
}
