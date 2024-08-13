import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import { resetPassword } from '../services/operations/authAPI';

function ResetPassword() {

    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const location = useLocation();
    const navigate = useNavigate();
    
    
    async function submitHandler(e){
        e.preventDefault();
        const token =  location.pathname.split("/").at(-1).trim();

        try
        {
            await resetPassword(password, confirmPassword, token); // this token is not the REDUX wala token , this is params wala token (ita a temporary only for reset password)
            navigate("/login");

        }catch(err)
        {
            console.log("Error in reset password");
            toast.error("Error in reset password");
        }

    }

  return (
     <div className='w-11/12 max-w-maxContent mx-auto h-screen flex flex-col justify-center items-center '>
            <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 border-2 border-tempPrimary p-4 '>

            <h1 className='font-bold text-xl'> Choose your password</h1>
            <p className='text-sm'>Almost done. Enter your new password and youre all set.</p>
            <form onSubmit={submitHandler} className='flex flex-col mt-3'>


            <div className='mb-5'>
              <input
                type='password'
                placeholder=' Enter your new password'
                name='email'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                className='w-full py-3 border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer'
                required
              />
            </div>

            <div className='mb-5'>
              <input
                type='password'
                placeholder='Re-enter your New Password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={(e)=> setConfirmPassword(e.target.value)}
                className='w-full py-3 border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer'
                required
              />
            </div>
 
        
            <div className='mt-7'>
              <button
                type='submit'
                className='w-full bg-tempSecondary hover:bg-tempPrimary border border-tempPrimary transition duration-300 ease-in font-semibold  text-[18px] leading-[30px] rounded-lg px-4 py-3 '
              >
                Reset Password
              </button>
            </div>
            </form>

            <Link to="/login" className='flex flex-row gap-2 items-center'>
                <IoArrowBack className='text-sm'/>
                <p className='text-xs hover:underline'>Back to login</p>
            </Link>
            </div>
        
        </div>

  )
}

export default ResetPassword
