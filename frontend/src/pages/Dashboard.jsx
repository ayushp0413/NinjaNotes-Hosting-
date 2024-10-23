import React from 'react'
import { Outlet } from 'react-router'
import SidebarDemo from '../components/aceternity/sidebar/sidebarComponent'
import { useSelector } from 'react-redux'

const Dashboard = () => {

  const {user} = useSelector((state) => state.profile);
  return (
    <div className='relative w-full flex flex-row justify-center text-black text-3xl mt-20 '>
        <div>
          <SidebarDemo img={user?.image} name={user?.name} />
        </div>
        <div className='ml-[4rem] mr-[0.8rem]   md:ml-[20rem] md:mr-[1.78rem] mb-2 mx-auto relative w-full max-w-[73.4rem] overflow-x-hidden'>
          <Outlet />
        </div>
    </div>
  )
}

export default Dashboard
