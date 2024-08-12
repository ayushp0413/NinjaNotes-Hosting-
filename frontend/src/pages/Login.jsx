import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import img from '../assets/images/loginImage.svg'
import toast from 'react-hot-toast'
import { login } from '../services/operations/authAPI'
import { useDispatch } from "react-redux";
import HighlightText from "../components/common/HighlightText"

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  function inputHandler(event){
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  async function submitHandler(event){
    event.preventDefault();
    try{
      setLoading(true);
      await login(formData, navigate, dispatch);
      setLoading(false);
    }catch(err)
    {
      console.log("Error in login");
      toast.error("Login Failed");
    }
  }



  return (
    <div className='w-11/12 max-w-maxContent mx-auto px-5 lg:px-0 mt-28'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        {/* ---------------- IMAGE ---------------- */}
        <div
          data-aos='fade-right'
          data-aos-duration='1200'
          className='hidden lg:block my-auto'
        >
          <figure className='rounded-lg'>
            <img src={img} alt='' className='w-full rounded-l-lg ' />
          </figure>
        </div>

        {/* ---------------- LOGIN FORM ---------------- */}
        <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 border p-4 '>
          <h3 className='text-left text-[22px] leading-9 font-bold mb-10 '>
            Hello!
            <HighlightText text={" Welcome Back"} className={"text-3xl"} />             
          </h3>

          <form className='py-4 md:py-0' onSubmit={submitHandler}>
            <div className='mb-5'>
              <input
                type='email'
                placeholder=' Enter your Email'
                name='email'
                value={formData.email}
                onChange={inputHandler}
                className='w-full py-3 border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer'
                required
              />
            </div>

            <div className='mb-5'>
              <input
                type='password'
                placeholder='Password'
                name='password'
                value={formData.password}
                onChange={inputHandler}
                className='w-full py-3 border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer'
                required
              />
            </div>

            <div className='mt-7'>
              <button
                type='submit'
                className='w-full bg-tempSecondary hover:bg-tempPrimary border border-tempPrimary transition duration-300 ease-in font-semibold  text-[18px] leading-[30px] rounded-lg px-4 py-3 '
              >
                Login
              </button>
            </div>

            <div className='flex flex-col justify-center items-center'>
            <p className='mt-8 text-tempDark text-center'>
              Don't have an account?
              <Link to='/signup' className='text-tempPrimary font-medium ml-2 '>
                Sign Up
              </Link>
            </p>

            {/* Forgot password pe modal ya page vo dekh lena , abhi khali rakh rha hu */}
            <Link to="/forgot-password">
              <p  className='text-tempDark -mt-5 hover:text-tempPrimary cursor-pointer'>Forgot Password ?</p>
            </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
