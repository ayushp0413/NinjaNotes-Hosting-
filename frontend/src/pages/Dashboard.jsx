import React from 'react'
import { Outlet } from 'react-router'


const Dashboard = () => {
  return (
    <div className='text-black text-3xl mt-20'>
        {/* Alag se component banega side baar jesa lekin abhi side bar nahi banayenge usko handle krna complex hota hai , apn nav jesa bana lenge */}
        <div>Options to change in profile -- my profile, settings, logout, my blogs , my notes etc.</div>
        <div>
          <Outlet />
        </div>
    </div>
  )
}

export default Dashboard
