import React, { useRef } from 'react'
import logo from '../../assets/images/tempLogo.svg'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from "react-icons/im";
import { useSelector } from 'react-redux';
import ProfileDropdownComponent from '../core/Auth/ProfileDropdownComponent';
import { setLoading } from '../../slices/authSlice';

const Navbar = () => {

  const {token} = useSelector((state) => state.auth);
  const {user} = useSelector((state) => state.profile);

  const MenuRef = useRef(null)
  const handleMenu = () => MenuRef.current.classList.toggle('show__menu')

  return (
    <div className='bg-white fixed top-0 left-0  w-screen flex flex-col gap-y-12 h-[80px]  items-center justify-center z-30'>
      <div className=' w-11/12 max-w-maxContent  flex flex-row justify-between items-center'>
        <div className=' '>
          <Link to={'/'}>
            <img src={logo} width={130} alt='logo'></img>
          </Link>
        </div>

        <nav onClick={handleMenu} ref={MenuRef} className='menu'>
          <ul className='md:opacity-100  hidden md:flex flex-row md:gap-3 lg:gap-16 lg:mt-7 items-center before:list-none mr-1 md:mr-20 text-tempDark '>
            <ImCross className='absolute font-bold right-2 top-4 md:hidden ' color='#000' />

            <Link to={'/notes'}>
              <li className='navLink'>Notes</li>
            </Link>
            <Link to={'/papers'}>
              <li className='navLink'>Papers</li>
            </Link>
            <Link to={'/blogs'}>
              <li className='navLink'>Blogs</li>
            </Link>
            <Link to={'/joinus'}>
              <li className='navLink'>Join Us</li> 
            </Link>
            <Link to={'/dashboard/myProfile'}>
              <li className='navLink md:hidden'>Dashboard</li> 
            </Link>
          </ul>
        </nav>
        <span
          onClick={handleMenu}
          className=' text-white text-2xl text-smallTextColor md:hidden cursor-pointer'
        >
          <GiHamburgerMenu color='#000' />
        </span>

        {/* LOGIN  when user is not logged In */}
        <div className='opacity-0 hidden md:opacity-100 md:flex flex-row items-center gap-3 text-white transition-all duration-200 relative'>
          {token === null ? (
            <Link to={'/login'}>
              <button className='btn border-2 border-black hover:bg-black hover:text-white transition-all duration-300 text-tempDark'>
                Login
              </button>
            </Link>
          ) : (
            <div></div>
          )}
          {
            token!=null  && ( <ProfileDropdownComponent/>)
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
