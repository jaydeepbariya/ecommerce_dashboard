import React from 'react'
import AdminSidebar from '../component/AdminSidebar'

const Transaction = () => {
  return (
    <div className='adminContainer'>
    {/* Sidebar */}
    <AdminSidebar />

    {/* Main */}
    <main>Main Content of Dashboard</main>
  </div>
  )
}

export default Transaction