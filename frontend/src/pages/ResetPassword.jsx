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
            <div className='lg:w-[350px]  flex flex-col gap-y-2'>

            <h1 className='font-bold text-xl'> Choose your password</h1>
            <p className='text-sm'>Almost done. Enter your new password and youre all set.</p>
            <form onSubmit={submitHandler} className='flex flex-col mt-3'>

                <label>
                    <p className='text-sm'>New Password<span  className='text-red-600'>*</span></p>
                    <input className='p-2 outline-none border-0 rounded-md bg-tempSecondary w-full mb-3 border-b-2  hover:border-blue-25 transition-all duration-200'
                        required
                        type='password'
                        name='password'
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        placeholder='Enter your new password'
                    >
                    </input>
                </label>   
                <label>
                    <p className='text-sm text-richblack-300'>Confirm new Password<span  className=' text-red-600'>*</span></p>
                    <input className='p-2 outline-none border-0 rounded-md bg-tempSecondary w-full mb-3 border-b-2 hover:border-blue-25 transition-all duration-200'
                        required
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={(e)=> setConfirmPassword(e.target.value)}
                        placeholder='Re-enter your new password'
                    >
                    </input>
                </label>   
        
                <button className=' bg-tempPrimary rounded-md p-2 font-semibold transition-all duration-200'>
                    Reset Password
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

export default ResetPassword
