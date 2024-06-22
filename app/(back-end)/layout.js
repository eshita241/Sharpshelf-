import React from 'react'
import Navbar from '../../components/dashboard/Navbar'
import Sidebar from '../../components/dashboard/Sidebar'

export default function Layout
({children}) {
  return (
    <div className='flex'>
        <Sidebar/>
        <main className='w-full min-h-screen'>
            {children} 
        </main>
    </div>
  )
}
