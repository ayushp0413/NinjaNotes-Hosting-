import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../services/operations/authAPI';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import {AiFillDashboard, AiOutlineCaretDown, AiOutlineDropbox} from "react-icons/ai"
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import  dropdownHook  from "../../../hooks/dropdownHook"
import { GiDrippingSword } from 'react-icons/gi';
import { MdOutlineArrowDropDown } from "react-icons/md"

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
    <div className='text-black flex flex-col justify-center items-center '>
        
        <div onClick={() => {setActive(true)}} className='flex justify-center items-center'  >
          <div className=' rounded-full border-4 border-tempPrimary cursor-pointer'>
            <img src={user?.image} width={40} className=' aspect-square object-cover rounded-full'/>   
          </div>        
          <div className=' cursor-pointer'>
            <MdOutlineArrowDropDown size={24}/>
          </div>
        </div>

        {
          active && (   
            <div className=' absolute top-[3.7rem] flex flex-col justify-center items-start z-[1000] overflow-hidden rounded-md border-2  border-tempPrimary bg-white'
               onClick={(e) => e.stopPropagation()}
               ref={ref}
              >
                <Link to="/dashboard/myProfile">
                  <div className='flex gap-1 justify-center px-4 py-1 items-center border-b-2 border-b-tempSecondary hover:bg-tempSecondary transition duration-200 ease-in text-tempDark font-semibold' onClick={() => {setActive(false)}}>
                    <VscDashboard size={19}/>
                    <button >Dashboard</button>
                  </div>
                </Link>
                
                <div onClick={() => {
                  dispatch(logout(navigate))
                  setActive(false)
                  }}
                  className='flex gap-1 justify-center px-[30px] py-1 items-center hover:bg-tempSecondary transition duration-200 ease-in text-tempDark font-semibold'
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
