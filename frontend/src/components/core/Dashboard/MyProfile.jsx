import React, { useEffect, useState } from 'react'
import HighlightText from '../../common/HighlightText'
import { FaUniversity } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'
import { MdOutlineMailOutline } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaGenderless } from 'react-icons/fa6'
import { MdExpandMore } from 'react-icons/md'
import toast from 'react-hot-toast'
import { deleteProfile, getUserDetails } from '../../../services/operations/profileAPI'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import "../../../index.css"
import CommonModal from '../../common/CommonModal'
import { logout } from '../../../services/operations/authAPI'
import SavedNotes from './Helper/SavedNotes'
import SavedPapers from './Helper/SavedPapers'
import PublishedBlogs from './Helper/PublishedBlogs'
import { Meteors } from '../../magicui/Meteor'

function MyProfile () {

  const {user} = useSelector((state) => state.profile);
  const {token} = useSelector((state) => state.auth);

  const [modalData, setModalData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  let about = user?.profile?.about;
  if(about?.length > 500) 
  {
    about = about.substring(0,500);
  }

  let trimmedDateString = null;
  if(user?.profile?.dateOfBirth) 
  {
    const dateObject = new Date(user?.profile?.dateOfBirth);

    // Get day, month, and year from the Date object
    const day = dateObject.getDate().toString().padStart(2, '0'); // padStart ensures two digits
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = dateObject.getFullYear();

    // Form the trimmed date string in "dd-mm-yyyy" format
    trimmedDateString = `${day}-${month}-${year}`;
  }

  useEffect(() => {
    console.log("USER DETAILS: ", user);
  })

  return (
    <>
      <div className='ml-[4rem] md:ml-[20rem] mb-2 mx-auto'>
        <div className='mr-[1rem] md:mr-[1.8rem] mx-auto'>
        {/* Profile Details */}
        <div className='w-full p-6 flex flex-col lg:flex-row items-center rounded-md gap-10 bg-[#f3f3f3]'>
          {/* Profile Image */}
          <div className='border-2 flex justify-center items-center border-black  rounded-full w-[120px] md:w-[200px] lg:w-[300px] aspect-square object-cover '>
            <img src={user?.image}  className='rounded-full aspect-square object-cover'/>
          </div>

          <div className='flex flex-col  w-full'>
            <div className='flex flex-col lg:flex-row justify-between'>
              <HighlightText text={`${user?.name}`} className={'text-5xl '} />
              <div className='flex flex-col lg:flex-row gap-2'>
                <Link to="/dashboard/settings">
                <button 
                  className='text-lg text-black px-2 py-2 rounded-md border-2 border-black hover:bg-tempPrimary hover:text-black transition-all duration-300 hidden lg:block'>
                  Edit Profile
                </button>
                </Link>
                <button onClick={() => setModalData({
                      text1:"Logging Out ?",
                      text2:"Are you sure to Log out your profile, there are more to explore on Ninja Notes.",
                      btn1Text:"Logout",
                      btn2Text:"Cancel",
                      btn1Handler: () => {dispatch(logout(navigate))},
                      btn2Handler: () => {setModalData(null)},
                  })} 
                
                  className='text-lg px-2 rounded-md border-2 border-black hover:bg-black  hover:text-white transition-all duration-300 hidden lg:block'>
                  Logout
                </button>
              </div>
            </div>

            {/* College name */}
            <div className='flex items-center text-xl gap-2 -mt-2  '>
              <FaUniversity />
              <p>{user?.profile?.college || "----"}</p>
            </div>

            {/* Details Section */}
            <div className='flex flex-col w-full p-2 rounded-md  mx-auto '>
              <h1 className='text-2xl'>About Me</h1>
              <p className='para text-lg  my-0 leading-5'>{about || "Add bio..."} </p>

              <div className='grid grid-cols-1 items-center lg:grid-cols-2 mt-6 '>
               
                <div className='flex flex-col md:flex-row  gap-2 text-lg'>
                  <div className='flex items-center justify-start  gap-x-2'>
                    <MdDateRange />
                    <p className='para text-lg font-extrabold '>
                      Date of Birth :{' '}
                    </p>
                  </div>
                  <div className='-mt-8 md:mt-0'>
                      <p>{trimmedDateString || "----"}</p>
                  </div>
                </div>

                <div className='flex flex-col md:flex-row  gap-2 text-lg'>
                  <div className='flex items-center justify-start  gap-x-2'>
                  <MdOutlineMailOutline />
                  <p className='para text-lg font-extrabold'>Email : </p>
                  </div>
                  <div className='-mt-8 md:mt-0'>
                  <p>{user?.email || "----"}</p>
                  </div>
                </div>

                <div className='flex flex-col md:flex-row  gap-2 text-lg'>
                  <div className='flex items-center justify-start  gap-x-2'>
                  <FaGenderless />
                  <p className='para text-lg font-extrabold'>Gender : </p>
                  </div>
                  <div className='-mt-8 md:mt-0'>
                  <p>{user?.profile?.gender || "----"}</p>
                  </div>
                </div>

                <div className='flex flex-col md:flex-row  gap-2 text-lg'>
                  <div className='flex items-center justify-start  gap-x-2'>
                  <FaPhoneAlt />
                  <p className='para text-lg font-extrabold'>
                    Contact Number :{' '}
                  </p>
                  </div>
                  <div className='-mt-8 md:mt-0'>
                  <p>{user?.profile?.contactNumber || "----"}</p>
                  </div>
                </div>



              </div>
            </div>

          </div>
        </div>
        
        {/* SAVED  NOTES  */}
        <div className='p-4 justify-center items-center rounded-md border bg-[#f3f3f3] mt-10'>
          <div className='flex flex-row justify-between items-center '>
                <div className='flex justify-center items-center'>
                  <span className=' bg-tempPrimary text-[0.8rem] lg:text-2xl font-semibold py-1 px-2  rounded-md w-fit mx-auto text-tempDark '>
                    Saved Notes
                  </span>
                </div>
                
                <Link to="/dashboard/notes">
                <h6 className=' text-tempDark  flex items-center gap-1 cursor-pointer hover:border-b-[1.3px] hover:border-tempPrimary transition-all duration-150 '>
                  Show All Notes
                </h6>
                </Link>
          </div>
          <SavedNotes partial={true} />  
        </div>

        {/* SAVED PAPERS */}
        <div className='p-4 justify-center items-center rounded-md border bg-[#f3f3f3] mt-10'>
          <div className='flex justify-between '>
                <div className='flex justify-center items-center w-fit'>
                  <span className=' bg-tempPrimary text-[0.8rem] lg:text-2xl font-semibold py-1 px-2  rounded-md w-fit mx-auto text-tempDark '>
                    Saved Papers
                  </span>
                </div>
                
                <Link to="/dashboard/papers">
                <h6 className=' text-tempDark  flex items-center gap-1 cursor-pointer hover:border-b-[1.3px] hover:border-tempPrimary transition-all duration-150 '>
                  Show All Papers
                </h6>
                </Link>
          </div>
          <SavedPapers partial={true} />  
        </div>

         {/* Published Blogs */}
         <div className='p-4 justify-center items-center rounded-md border bg-[#f3f3f3] mt-10 mb-6'>
          <div className='flex justify-between '>
                <div className='flex justify-center items-center'>
                  <span className=' bg-tempPrimary text-[0.8rem] lg:text-2xl font-semibold py-1 px-2  rounded-md w-fit mx-auto text-tempDark '>
                    Published Blogs
                  </span>
                </div>
                
                <Link to="/dashboard/blogs">
                <h6 className=' text-tempDark  flex items-center gap-1 cursor-pointer hover:border-b-[1.3px] hover:border-tempPrimary transition-all duration-150 '>
                  Show All Blogs
                </h6>
                </Link>
          </div>
          <PublishedBlogs />  
        </div>
        </div>
        </div>
        {
          modalData && (<CommonModal modalData = {modalData} />)
        }
    </>
    
  )
}

export default MyProfile
