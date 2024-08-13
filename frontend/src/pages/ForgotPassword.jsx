import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { forgotPassword } from '../services/operations/authAPI'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState(false)

  async function submitHandler (event) {
    event.preventDefault()
    try {
      await forgotPassword(email)
    } catch (err) {
      console.log('Error in Forgot Password')
      toast.error('Error in Forgot Password')
    }
  }

  const toggleButton = () => {}

  return (
    <div className='w-11/12 max-w-maxContent mx-auto h-screen flex flex-col justify-center items-center '>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 border-2 border-tempPrimary p-4 '>
        <h1 className='font-bold text-xl'>
          {!emailSent ? 'Reset your Password' : 'Check your email'}
        </h1>
        <p className='text-sm text-richblack-300 '>
          {!emailSent
            ? 'Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery'
            : `We have sent the reset email ${email}`}
        </p>
        <form onSubmit={submitHandler} className='flex flex-col mt-3'>
          {!emailSent && (
            <div className='mb-5'>
              <input
                type='email'
                placeholder='Enter email address'
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                className='w-full py-3 border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer'
                required
              />
            </div>
          )}
          <button
            onClick={() => setEmailSent(prev => !prev)}
            type='submit'
             className='w-full bg-tempSecondary hover:bg-tempPrimary border border-tempPrimary transition duration-300 ease-in font-semibold  text-[18px] leading-[30px] rounded-lg px-4 py-2 '
          >
            {!emailSent ? 'Reset Password' : 'Reset Email'}
          </button>
        </form>

        <Link to='/login' className='flex flex-row gap-2 items-center '>
          <IoArrowBack className='text-sm' />
          <p className='text-xs'>Back to login</p>
        </Link>
      </div>
    </div>
  )
}

export default ForgotPassword
