import React, { useState } from 'react'
import img from '../assets/images/signupImage.svg'
import { Link, useNavigate } from 'react-router-dom';
import { singUp } from '../services/operations/authAPI';
import toast from 'react-hot-toast';

const SignUp = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    function inputHandler(event){
        setFormData({...formData, [event.target.name] : event.target.value})
    }

    const signUpServices = async(formData) => {
      try
      {
        setLoading(true);
        await singUp(formData, navigate);
        setLoading(false);
      }catch(err)
      {
        toast.error("ERROR");
        console.log("Sign up error ...");
      }
    }

    function submitHandler(event){
      event.preventDefault();
      setLoading(true);
      console.log("DATA : ", formData);
      signUpServices(formData); 
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
              <input type=""
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
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