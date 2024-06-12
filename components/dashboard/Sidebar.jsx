import React from 'react';
import Link from "next/link";
import { GoChevronLeft } from "react-icons/go";



export default function Sidebar(){
    let LinkDat = [
        {name: "Home", link:"/dashboard/home/overview"},
        {name: "Home", link:"/dashboard/home/overview"},
        {name: "Home", link:"/dashboard/home/overview"},
        {name: "Home", link:"/dashboard/home/overview"},
    ]
    return (
            <div className='w-56 min-h-screen bg-slate-900 text-slate-200'>
                <div className='flex flex-col'>
                    <ul>
                        {
                            LinkDat.map((link) => (
                                <Link href={link.link}><li className='flex justify-center items-center gap-3 bg-slate-100'>
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
