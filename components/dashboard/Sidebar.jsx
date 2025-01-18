"use client";
import React from 'react';
import Link from "next/link";
import { GoChevronLeft } from "react-icons/go";
import { usePathname } from "next/navigation";



export default function Sidebar(){
    const pathname = usePathname();
    let LinkDat = [
        {name: "Home", link:"/"},
        {name: "Red Cow", link:"/dashboard/productions/redcow"},
        {name: "Modern", link:"/dashboard/productions/modern"},
    ]
    return (
            <div className='relative w-56 min-h-screen bg-slate-900 text-slate-200'>
                <div className='flex flex-col'>
                    <ul className='fixed'>
                        {
                            LinkDat.map((link,i) => (
                                <Link href={link.link} key={i} className={`${pathname===link.link?" text-lime-400":" text-white hover:text-yellow-400"}`}><li className='flex justify-ends items-center gap-4 py-5 '>
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
