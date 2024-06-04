import React from 'react';
import { TbHistoryToggle } from "react-icons/tb";


export default function Navbar() {
  return (
    <div className=' bg-slate-300 h-14 flex items-center justify-between px-7'>
        <div className='flex'>
          <button><TbHistoryToggle size={34} className=''/></button>
        </div>
        <div></div>
    </div>
  )
}