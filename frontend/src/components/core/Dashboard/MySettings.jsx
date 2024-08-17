import React, { useState } from 'react'
import { FileUpload } from '../../magicui/FileUpload'
import { Link, useNavigate } from 'react-router-dom'
import HighlightText from '../../common/HighlightText'
import { MdDelete } from 'react-icons/md'

const MySettings = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: 'Kunal Bhavare',
    email: 'kbhavre78@gmail.com',
    phoneNo: '8269970229',
    gender: '',
    dob: '',
    college: 'MIT Ujjain',
    about:
      'hello there i am kunal bhavare a computer science engineer , this is nothing but the temprory text written we have to change or update the text as soon as possible'
  })

  function inputHandler (event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  function submitHandler (event) {
    event.preventDefault()
    setLoading(true)
    console.log('DATA : ', formData)
  }

  return (
    <div className='ml-[4rem] md:ml-[20rem] mr-2 mb-4 '>
      <div className='grid sm:grid-cols-1 lg:grid-cols-2 justify-center items-start'>
        {/* =============== SIGNUP FORM =============== */}
        <div className=' w-full max-w-[330px] md:max-w-[570px] mx-auto  rounded-lg shadow-md border-2 border-tempPrimary p-6 px-2 md:px-10 my-2 md:my-4 '>
          <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10 '>
            Update{' '}
            <HighlightText text={'Profile Details'} className={'text-3xl'} />
          </h3>

          <form onSubmit={submitHandler}>
            <div className='mb-5 flex flex-col md:flex-row gap-8 '>
              <div className='flex flex-col '>
                <label
                  className='text-lg font-medium text-tempPrimary'
                  htmlFor='name'
                >
                  Name
                </label>
                <input
                  type='text'
                  placeholder='Enter your Name'
                  name='name'
                  value={formData.name}
                  onChange={inputHandler}
                  className='w-full pr-4  border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer'
                />
              </div>

              <div className='flex flex-col '>
                <label
                  className='text-lg font-medium text-tempPrimary'
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  type='email'
                  placeholder='Enter your Email'
                  name='email'
                  value={formData.email}
                  onChange={inputHandler}
                  className='w-full pr-4  border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer'
                />
              </div>
            </div>

            <div className='mb-5 flex flex-col md:flex-row gap-8 '>
              <div className='flex flex-col '>
                <label
                  className='text-lg font-medium text-tempPrimary'
                  htmlFor='phoneNo'
                >
                  Contact Number
                </label>
                <input
                  type='tel'
                  placeholder='Enter your Contact Number'
                  name='phoneNo'
                  value={formData.phoneNo}
                  onChange={inputHandler}
                  className='w-full pr-4  border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer'
                />
              </div>

              <div className='flex flex-col '>
                <label
                  className='text-lg font-medium text-tempPrimary'
                  htmlFor='college'
                >
                  College Name
                </label>
                <input
                  type='text'
                  placeholder='Enter your College Name'
                  name='college'
                  value={formData.college}
                  onChange={inputHandler}
                  className='w-full pr-4  border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer'
                />
              </div>
            </div>

            <div className='mb-5 flex flex-col md:flex-row gap-8 lg:gap-40 '>
              <div className='flex flex-col mt-[5px]'>
                <label
                  className='text-lg font-medium text-tempPrimary'
                  htmlFor='gender'
                >
                  Gender
                </label>
                <select
                  id='gender'
                  name='gender'
                  value={formData.gender}
                  onChange={inputHandler}
                  className='w-full pr-4 border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer  '
                  required
                >
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                  <option value='other'>Other</option>
                </select>
              </div>

              <div className='flex flex-col '>
                <label
                  className='text-lg font-medium text-tempPrimary'
                  htmlFor='dob'
                >
                  Date of Birth
                </label>
                <input
                  type='date'
                  placeholder='Enter your Date of Birth'
                  name='dob'
                  value={formData.dob}
                  onChange={inputHandler}
                  className='w-full pr-4  border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer'
                />
              </div>
            </div>

            <div className='mb-5 flex flex-col'>
              <label
                className='text-lg font-medium text-tempPrimary'
                htmlFor='about'
              >
                About Me
              </label>
              <textarea
                name='about'
                value={formData.about}
                onChange={inputHandler}
                className='w-full pr-4  border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-5 text-headingColor placeholder:text-textColor cursor-pointer'
              />
            </div>
          </form>
        </div>

        {/* ------------------------ Upload Photo ------------------------*/}
        <div className='w-full max-w-[320px] md:max-w-[570px] mx-auto flex flex-col '>
          <div className=' mr-2 my-4  border border-dashed bg-white dark:bg-black border-tempPrimary dark:border-neutral-800 rounded-md   inline-block'>
            <FileUpload />
          </div>
          <div className='flex justify-center gap-4'>
            <button className='btn px-10 md:px-24 border-2 border-black hover:bg-red-600 hover:text-black transition-all duration-300 '>
              Cancel
            </button>
            <button className='btn md:px-20 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 '>
              Save Details
            </button>
          </div>
        </div>

       


      </div>

       {/* ------------------------ Delete Section ------------------------*/}
       <div className=' m-4 p-4 flex   mb-20 border-2 border-black  bg-red-500 rounded-md '>
          <MdDelete className='h-60 w-60 hidden md:block' />
          <div className='flex flex-col justify-center mx-4'>
            <h1 className=' leading-5 text-4xl'>Delete Account</h1>
            <p className='leading-6 '>Would you like to delete account?</p>
            <p className='-mt-2 text-lg leading-4 font-thin'>This account may contain your saved notes, papers and written blogs. Deleting your account is permanent and will remove all the contain associated with it, and this can't be revert back.</p>
            <button className='btn px-10 md:px-24 flex justify-center items-center  gap-4 border-2 border-black bg-red-400 hover:bg-red-600 hover:text-black transition-all duration-300 '>
                Delete Account <MdDelete className='block md:hidden'/>
            </button>
          </div>
        </div>
    </div>
  )
}

export default MySettings
