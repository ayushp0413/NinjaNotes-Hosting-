import React from 'react'
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../services/operations/authAPI';

const ForgotPassword = () => {
    
    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(false);

     async function submitHandler(event) {
        event.preventDefault();
        try
        {
            await forgotPassword(email);

        }catch(err)
        {
            console.log("Error in Forgot Password");
            toast.error("Error in Forgot Password");
        }
    }

    const toggleButton = () =>{
    }
  
    return (
        <div className='w-11/12 max-w-maxContent mx-auto h-screen flex flex-col justify-center items-center '>
            <div className='max-w-[350px]  flex flex-col gap-y-2'>    
                <h1 className='font-bold text-xl'>
                    {
                        !emailSent ? ("Reset your Password") : ("Check your email") 
                    }
                </h1>
                <p className='text-sm text-richblack-300 '>
                    {
                        !emailSent ? ("Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery") : (`We have sent the reset email ${email}`)
                    }
                </p>
                <form onSubmit={submitHandler} className='flex flex-col mt-3'>
                {
                    !emailSent && 
                        <label>
                            <p className='text-sm'>Email Address <span  className=' text-red-600'>*</span></p>
                            <input className='p-2 outline-none border-0 rounded-md w-full mb-3 border-b-2  hover:border-blue-25 transition-all duration-200'
                                required
                                type='email'
                                name='email'
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
                                placeholder='Enter email address'
                            >
                            </input>
                        </label>   
                }
                <button onClick={() => setEmailSent((prev) => !prev)} type='submit' className=' bg-tempPrimary rounded-md p-2 font-semibold transition-all duration-200'>
                    {
                        !emailSent ? ("Reset Password") : ("Reset Email")
                    }
                </button>
                </form>

                <Link to="/login" className='flex flex-row gap-2 items-center '>
                    <IoArrowBack className='text-sm'/>
                    <p className='text-xs'>Back to login</p>
                </Link>

            </div>
        
        </div>
  )
}

export default ForgotPassword
