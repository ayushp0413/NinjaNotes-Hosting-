import React from 'react'
import { Outlet } from 'react-router'
import SidebarDemo from '../components/aceternity/sidebar/sidebarComponent'
import { useSelector } from 'react-redux'

const Dashboard = () => {

  const {user} = useSelector((state) => state.profile);
  return (
    <div className='text-black text-3xl mt-20'>
        <SidebarDemo img={user?.image} name={user?.name} />
        <div>
          <Outlet />
        </div>
    </div>
  )
}

export default Dashboard
