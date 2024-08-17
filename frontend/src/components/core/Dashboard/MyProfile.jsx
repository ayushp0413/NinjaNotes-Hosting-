import React from 'react'
import HighlightText from '../../common/HighlightText'
import { FaUniversity } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'
import { MdOutlineMailOutline } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaGenderless } from 'react-icons/fa6'
import { MdExpandMore } from 'react-icons/md'

function MyProfile () {
  return (
    <div className='ml-[4rem] md:ml-[20rem] mb-2'>
      <div className=' '>
        {/* Profile Details */}
        <div className='p-4 flex flex-col lg:flex-row items-center rounded-md gap-10 bg-[#f3f3f3]'>
          {/* Profile Image */}
          <div className='h-[350px] w-[80%] lg:w-[40%] border-2 border-black bg-pink-400 rounded-md'></div>

          <div className='flex flex-col '>
            <div className='flex flex-col lg:flex-row justify-evenly lg:gap-56'>
              <HighlightText text={'Kunal Bhavare'} className={'text-5xl '} />

              <div className='flex flex-col lg:flex-row gap-2'>
                <button className='text-lg px-2 rounded-md border-2 border-black hover:bg-black hover:text-white transition-all duration-300 hidden lg:block'>
                  Edit Profile
                </button>
                <button className='text-lg px-2 rounded-md border-2 border-black hover:bg-red-600 hover:text-black transition-all duration-300 hidden lg:block'>
                  Delete Account
                </button>
              </div>
            </div>

            {/* College name */}
            <div className='flex items-center text-xl gap-2 -mt-2  '>
              <FaUniversity />
              <p>MIT, Ujjain</p>
            </div>

            {/* Details Section */}
            <div className='flex flex-col p-2 border border-tempPrimary rounded-md shadow-md bg-tempSecondary mx-auto'>
              <h1 className='text-3xl'>About Me</h1>
              <p className='para text-lg  my-0 leading-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias quibusdam dolorum error numquam quia suscipit quod
                cumque quo enim assumenda!
              </p>

              <div className='grid grid-cols-1 lg:grid-cols-2 mt-6'>
                <div className='flex items-center text-lg gap-2 h-[40px]'>
                  <MdDateRange />
                  <p className='para text-lg font-extrabold '>
                    Date of Birth :{' '}
                  </p>
                  <p>22 June 2002</p>
                </div>

                <div className='flex items-center text-lg gap-1  h-[40px]'>
                  <MdOutlineMailOutline />
                  <p className='para text-lg font-extrabold'>Email Add : </p>
                  <p>kbhavre78@gmail.com</p>
                </div>

                <div className='flex items-center text-lg gap-1  h-[40px]'>
                  <FaPhoneAlt />
                  <p className='para text-lg font-extrabold'>
                    Contact Number :{' '}
                  </p>
                  <p>8269970229</p>
                </div>

                <div className='flex items-center text-lg gap-1  h-[40px]'>
                  <FaGenderless />
                  <p className='para text-lg font-extrabold'>Gender : </p>
                  <p>Male</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------My Blogs Section ------------------------*/}
        <div className='p-4 justify-center items-center rounded-md border shadow-md mt-4 '>
          <div className='flex justify-between '>
            <div className='flex justify-center items-center'>
              <span className=' bg-tempPrimary text-2xl lg:text-4xl font-semibold py-1 px-2  rounded-md w-fit mx-auto text-tempDark '>
                My Blogs
              </span>
            </div>

            <h6 className='flex items-center gap-1 cursor-pointer'>
              Show All Blogs <MdExpandMore />
            </h6>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mx-auto my-8'>
            <div className='bg-purple-400 h-[150px] w-[150px] rounded-md mx-auto md:mx-0'>
              Notes 1
            </div>
            <div className='bg-purple-400 h-[150px] w-[150px] rounded-md mx-auto md:mx-0'>
              Notes 2
            </div>
            <div className='bg-purple-400 h-[150px] w-[150px] rounded-md mx-auto md:mx-0'>
              Notes 3
            </div>
            <div className='bg-purple-400 h-[150px] w-[150px] rounded-md mx-auto md:mx-0'>
              Notes 4
            </div>
            <div className='bg-purple-400 h-[150px] w-[150px] rounded-md mx-auto md:mx-0'>
              Notes 5
            </div>
          </div>
        </div>

        {/* ------------------------Saved Notes------------------------*/}
        <div className='p-4 justify-center items-center rounded-md border shadow-md'>
          <div className='flex justify-between '>
            <div className='flex justify-center items-center'>
              <span className=' bg-tempPrimary text-2xl lg:text-4xl font-semibold py-1 px-2  rounded-md w-fit mx-auto text-tempDark '>
                Saved Notes
              </span>
            </div>

            <h6 className='flex items-center gap-1 cursor-pointer'>
              Show All Notes<MdExpandMore />
            </h6>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mx-auto my-8'>
            <div className='bg-purple-400 h-[150px] w-[150px] rounded-md mx-auto md:mx-0'>
              Notes 1
            </div>
            <div className='bg-purple-400 h-[150px] w-[150px] rounded-md mx-auto md:mx-0'>
              Notes 2
            </div>
            <div className='bg-purple-400 h-[150px] w-[150px] rounded-md mx-auto md:mx-0'>
              Notes 3
            </div>
            <div className='bg-purple-400 h-[150px] w-[150px] rounded-md mx-auto md:mx-0'>
              Notes 4
            </div>
            <div className='bg-purple-400 h-[150px] w-[150px] rounded-md mx-auto md:mx-0'>
              Notes 5
            </div>
          </div>
        </div>

        {/*------------------------ Saved Papers ------------------------*/}
        <div className='p-4 justify-center items-center rounded-md border shadow-md mt-4'>
          <div className='flex justify-between '>
            <div className='flex justify-center items-center'>
              <span className=' bg-tempPrimary text-2xl lg:text-4xl font-semibold py-1 px-2  rounded-md w-fit mx-auto text-tempDark '>
                Saved Papers
              </span>
            </div>

            <h6 className='flex items-center gap-1 cursor-pointer'>
              Show All Papers<MdExpandMore />
            </h6>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mx-auto my-8'>
            <div className='bg-purple-400 h-[150px] w-[150px] rounded-md mx-auto md:mx-0'>
              Notes 1
            </div>
            <div className='bg-purple-400 h-[150px] w-[150px] rounded-md mx-auto md:mx-0'>
              Notes 2
            </div>
            <div className='bg-purple-400 h-[150px] w-[150px] rounded-md mx-auto md:mx-0'>
              Notes 3
            </div>
            <div className='bg-purple-400 h-[150px] w-[150px] rounded-md mx-auto md:mx-0'>
              Notes 4
            </div>
            <div className='bg-purple-400 h-[150px] w-[150px] rounded-md mx-auto md:mx-0'>
              Notes 5
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile
