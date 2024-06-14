"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeNav(){
    const pathname = usePathname();
    let LinkData = [
        {name: "Home", link:"/dashboard/home/overview"},
        {name: "Getting Started", link:"/dashboard/home/getting-started"},
        {name: "Recent Updates", link:"/dashboard/home/updates"},
        {name: "Announcements", link:"/dashboard/home/announcements"},
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