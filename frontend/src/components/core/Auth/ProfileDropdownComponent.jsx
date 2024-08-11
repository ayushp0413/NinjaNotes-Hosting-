import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../services/operations/authAPI';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import {AiOutlineCaretDown} from "react-icons/ai"
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import  dropdownHook  from "../../../hooks/dropdownHook"

const ProfileDropdownComponent = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.profile);
  const [active, setActive] = useState(false);
  const ref = useRef(null)
  dropdownHook(ref, () =>setActive(false))

  

  const dashboardHandler = () => {
    console.log("Handler")
    dispatch(navigate("/login"))
  }

  return (
    <div className='text-black flex flex-col justify-center items-center'>
        <div className=' rounded-full border-4 border-tempPrimary cursor-pointer'
          onClick={() => {setActive(true)}}  
        >
          <img src={user?.image} width={40} className=' rounded-full'/>   
         
        </div>
        {
          active && (   
            <div className=' absolute top-[3.7rem] flex flex-col justify-center items-start z-[1000] overflow-hidden rounded-md border-2 px-3 border-tempSecondary'
               onClick={(e) => e.stopPropagation()}
               ref={ref}
              >
                <Link to="/dashboard/myProfile">
                  <div className='flex gap-1 justify-center items-center text-tempDark font-semibold' onClick={() => {setActive(false)}}>
                    <VscDashboard size={19}/>
                    <button>Dashboard</button>
                  </div>
                </Link>
                
                <div onClick={() => {
                  dispatch(logout(navigate))
                  setActive(false)
                  }}
                  className='flex gap-1 justify-center items-center text-tempDark font-semibold'
                  >
                  <VscSignOut size={19}/>
                  <button>Logout</button>
                </div>

            </div>
        )
        }
    </div>
  )
}

export default ProfileDropdownComponent
