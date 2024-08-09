import React, { useState } from 'react'
import img from '../assets/images/signupImage.svg'
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPasword: '',
    })

    function inputHandler(event){
        setFormData({...formData, [event.target.name] : event.target.value})
    }

    function submitHandler(event){
        event.preventDefault();
        setLoading(true);

        // Again yaha ka bhi tu hi handle kar lena
        
    }



  return (
    
    <div className="w-11/12 max-w-maxContent mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 ">

        {/* =============== IMG BOX =============== */}
        <div className="hidden lg:block bg-primaryColor rounded-l-lg">
          <figure className='rounded-lg'>
            <img src={img} alt="" className='w-full rounded-l-lg mt-24' />
          </figure>
        </div>

        {/* =============== SIGNUP FORM =============== */}
        <div className="rounded-lg lg:pl-16 py-10 p-4">
          <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10 '>
            Create an <span className='text-tempPrimary'>Account</span>
          </h3>

          <form onSubmit={submitHandler}>
            <div className="mb-5">
              <input type="text"
                placeholder="Enter your Name"
                name="name"
                value={formData.name}
                onChange={inputHandler}
                className="w-full pr-4 py-3 border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
                required
              />
            </div>
            <div className="mb-5">
              <input type="email"
                placeholder="Enter your Email"
                name="email"
                value={formData.email}
                onChange={inputHandler}
                className="w-full pr-4 py-3 border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
                required
              />
            </div>
            <div className="mb-5">
              <input type="tel"
                placeholder="Enter your Phone No."
                name="phone"
                value={formData.phone}
                onChange={inputHandler}
                className="w-full pr-4 py-3 border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
                required
              />
            </div>
            <div className="mb-5">
              <input type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={inputHandler}
                className="w-full pr-4 py-3 border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
                required
              />
            </div>
            <div className="mb-5">
              <input type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPasword}
                onChange={inputHandler}
                className="w-full pr-4 py-3 border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
                required
              />
            </div>

            

            <div className="mt-7">
            <button
                type='submit'
                className='w-full bg-tempSecondary hover:bg-tempPrimary border border-tempPrimary transition duration-300 ease-in font-semibold  text-[18px] leading-[30px] rounded-lg px-4 py-3 '
              >
                Sign Up
              </button>
            </div>

            <p className="mt-5 text-textColor text-center">
              Already have an account?
              <Link to='/login' className="text-tempPrimary font-medium ml-2">
                Login
              </Link>
            </p>

          </form>
        </div>

      </div>
    </div>
  
  )
}

export default SignUp