import React, { useRef } from 'react'
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

  const token = null; // it will come from redux

  const MenuRef = useRef(null);
  const handleMenu = () => MenuRef.current.classList.toggle("show__menu");
  
  return (
    <div className='bg-theme fixed top-0 left-0 z-10 w-screen flex flex-col gap-y-12 h-[80px] items-center justify-center'>
        <div className=' w-11/12 max-w-maxContent  flex flex-row justify-between items-center'>
            
            <div className=''>
                <Link to={"/"}>
                    <img src={logo} width={130} alt='logo'></img>
                </Link>
            </div>


            <nav onClick={handleMenu} ref={MenuRef} className='menu'>
                <ul className='md:opacity-100 hidden md:flex flex-row md:gap-3 lg:gap-16 lg:mt-7 items-center before:list-none mr-4 '>
                    <Link to={"/notes"}>
                      <li className='text-black text-xl font-semibold cursor-pointer hover:bg-tingGreen rounded-md px-2 py-0 transition-all duration-300 before:list-none'>Notes</li>
                    </Link>
                    <Link to={"/papers"}>
                      <li className='text-black text-xl font-semibold cursor-pointer hover:bg-tingGreen rounded-md px-2 py-0 transition-all duration-300 before:list-none'>Papers</li>
                    </Link>
                    <Link to={"/blogs"}>
                      <li className='text-black text-xl font-semibold cursor-pointer hover:bg-tingGreen rounded-md px-2 py-0 transition-all duration-300 before:list-none'>Blogs</li>
                    </Link>
                    <Link to={"/joinus"}>
                      <li className='text-black text-xl font-semibold cursor-pointer hover:bg-tingGreen rounded-md px-2 py-0 transition-all duration-300 before:list-none'>Join Us</li>
                    </Link>
                    
                </ul>
            </nav>
            <span onClick={handleMenu} className=' text-white text-2xl text-smallTextColor md:hidden cursor-pointer'>
              <GiHamburgerMenu color='#000'/>
            </span>

            {/* LOGIN  when user is not logged In */}
            <div className='opacity-0 hidden md:opacity-100 md:flex flex-row items-center gap-3 text-white transition-all duration-200 relative'>

              {
                    token === null ? (
                        <Link to={"/login"}>
                            <button className='border-[1px] border-black px-4 py-2 rounded-md  hover:scale-95 text-black font-bold bg-tingGreen'>
                                Login
                            </button>
                        </Link>
                    ) : (<div></div>)
              }  
            </div>

        </div>
    </div>
  )
} 

export default Navbar
