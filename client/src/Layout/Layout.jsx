import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  return (
    <div>
        <Navbar />
        <div className='container mx-auto min-h-[85vh] bg-gray-200 p-5'>
        <Outlet />
        </div>

        <Footer />
    </div>
  )
}
