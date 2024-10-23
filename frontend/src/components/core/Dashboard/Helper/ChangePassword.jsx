import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { changePassword } from '../../../../services/operations/profileAPI';
import toast from 'react-hot-toast';


const ChangePassword = () => {

    const {register, handleSubmit, reset, formState:{errors, isSubmitSuccessful}} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const {user} = useSelector((state)=> state.profile);
    const {token} = useSelector((state)=> state.auth);

    const changePasswordHandler = async(data) => {
        setLoading(true); 
        try
         {
            const oldpassword = data.oldpassword;
            const newpassword = data.newpassword;
            const confirmpassword = data.confirmpassword;
            
            if(newpassword !== confirmpassword )
            {
                toast.error("Password not matched!");
                return;
            }

            dispatch(changePassword(token, user?.email, oldpassword, newpassword, navigate));

    
         }catch(err)
         {
            console.log("Error in form submitting: ", err);
         }
         setLoading(false);
      }
    
    function cancelDetails()
    {
        reset({
            oldpassword:'',
            newpassword:'',
            confirmpassword:'',
        })
    }


    useEffect(()=>{
    reset({
        oldpassword:'',
        newpassword:'',
        confirmpassword:'',
    })
    },[reset, isSubmitSuccessful]);
    
  return (
    <div className='relative w-full flex flex-col lg:flex-row gap-5 p-6 py-10 items-center rounded-md bg-[#f3f3f3]'>
        
        <form onSubmit={handleSubmit(changePasswordHandler)} className='w-full'>
            <h2 className='text-[1.5rem] text-tempDark mb-5'>Change Password</h2>
            <div className='flex flex-col md:flex-row justify-between gap-x-10'>
                <div className='mb-5 w-full'>
                <input
                    type='password'
                    id='oldpassword'
                    placeholder='Enter current password'
                    name='oldpassword'
                    className='w-full rounded-md px-4 py-3 border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer'
                    {...register("oldpassword",{required:true})}
                />
                {
                errors.oldpassword && (<span className=' text-tempPrimary text-xs'>Please Enter your current password!</span>)    
                }
                </div>

                <div className='mb-5 w-full'>
                    <input
                    type='password'
                    id='newpassword'
                    placeholder='Enter new password'
                    name='newpassword'
                    className='w-full rounded-md px-4 py-3 border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer'
                    {...register("newpassword",{required:true})}
                    />
                    {
                    errors.newpassword && (<span className=' text-tempPrimary text-xs'>Please Enter your new password!</span>)    
                    }
                </div>

                <div className='mb-5 w-full'>
                    <input
                    type='password'
                    id='confirmpassword'
                    placeholder='Confirm password'
                    name='confirmpassword'
                    className='w-full rounded-md px-4 py-3 border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer'
                    {...register("confirmpassword",{required:true})}
                    />
                    {
                    errors.confirmpassword && (<span className=' text-tempPrimary text-xs'>Please confirm your new password!</span>)    
                    }
                </div> 
            </div>

            <div className='w-full max-w-full flex justify-end gap-4'>
              <div 
               onClick={cancelDetails}
                className='btn  border-2 border-black hover:bg-tempPrimary hover:text-black transition-all duration-300 '>
                Cancel
              </div>
              <button
               type='submit'
               className='btn  border-2 border-black hover:bg-black hover:text-white transition-all duration-300 '>
                Save
              </button>
            </div>
        
        </form>

    </div>
  )
}

export default ChangePassword
