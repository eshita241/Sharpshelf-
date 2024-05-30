import React from 'react'
import Navbar from '../../components/dashboard/Navbar'

export default function Layout
({children}) {
  return (
    <div className='flex'>
        <div className=' w-56 min-h-screen bg-slate-900 text-slate-200'>
            sidebar
        </div>
        <main className='w-full min-h-screen'>
            <Navbar/>
            {children} 
        </main>
    </div>
  )
}
