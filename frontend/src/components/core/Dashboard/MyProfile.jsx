import React, { useEffect, useState } from 'react'
import HighlightText from '../../common/HighlightText'
import { FaUniversity } from 'react-icons/fa'
import { MdBook, MdDateRange, MdEmail, MdMale, MdNote, MdNotes, MdPages, MdPhone, MdTransgender } from 'react-icons/md'
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

  const [modalData, setModalData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = user?.name;
  const email = user?.email;
  const gender = user?.profile?.gender;
  const contactNumber = user?.profile?.contactNumber;
  const blogsCount = user?.blogs?.length;
  const notesCount = user?.notes?.length;
  const papersCount = user?.papers?.length;


 
  let about = user?.profile?.about;
  if(about?.length > 500) 
    about = about.substring(0,500);

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

  return (
    <div className='relative w-full flex flex-col gap-4'>
        <HighlightText text={"My Profile"} className={"text-center md:text-left border-b border-tempPrimary w-full md:w-fit p-2 rounded-md -mb-1 font-bold"} />
        {/* <h2 className=' text-center md:text-left border-b border-tempPrimary w-full md:w-fit p-2 rounded-md bg-[#f3f3f3] -mb-1'>My Profile</h2> */}
        {/* PROFILE IMAGE AND NAME */}
        <div className='w-full flex flex-col lg:flex-row gap-5 p-6 py-10 items-center rounded-md bg-[#f3f3f3]'>
          <div className='border-[1.7px] border-tempDark flex justify-center items-center rounded-full '>
            <img src={user?.image} width={180}  className='rounded-full aspect-square object-cover'/>
          </div>
          <div className='max-w-full flex flex-col justify-center text-[1.3rem] space-y-1'>
            <h1 className='-mb-4'><HighlightText text={`${name}`} className={'text-4xl'} /></h1>
            <p className='mb-0 break-words md:text-md'>{email}</p>
            <div className='flex flex-row items-center justify-start gap-2'>
            {
              user?.profile?.college ? (
                <>
                  <FaUniversity size={24} className='hidden md:block'/>
                  <p className='break-words md:text-md'>{user?.profile?.college || "----"}</p>
                </>
              ) : (<span></span>)
            }
              
            </div>
          </div>

        </div>

        {/* DETAILS OF USER */}
        <div className='w-full flex flex-col gap-5 p-6 items-center rounded-md bg-[#f3f3f3] text-tempDark'>
          <div className='w-full flex  flex-col md:flex-row justify-between'>
            <h3>Personal Details</h3>
            {/* Buttons */}
            <div className='relative w-fit md:flex flex-col lg:flex-row gap-2 hidden'>
              <Link to="/dashboard/settings">
                <button className='text-lg text-black px-2 py-2 rounded-md border-2 border-black hover:bg-tempPrimary hover:text-black transition-all duration-300'>
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
              
                className='text-lg px-2 rounded-md border-2 border-black hover:bg-black  hover:text-white transition-all duration-300 '>
                Logout
              </button>
            </div>  
          </div>

            {/* all details */}
            <div className='flex flex-col w-full p-2 rounded-md  mx-auto '>
              <div className='w-full flex flex-col text-wrap break-words'>
                <h1 className='text-2xl'>About Me</h1>
                {
                  about ? ( <p className='para text-lg  my-0 leading-5'>{about} </p>) :
                  (<Link to="/dashboard/settings"><span className='text-sm text-tempPrimary font-bold cursor-pointer hover:text-teal-700 transition-all duration-100'>Add bio</span></Link>)
                }
              </div>

              <div className='grid grid-cols-1 items-center place-content-start lg:grid-cols-2 mt-6 '>
               
                <div className='flex flex-row items-center gap-y-0 gap-x-2 space-y-0 text-lg'>
                  <div className='flex flex-row items-center flex-wrap justify-start gap-2'>
                    <MdDateRange className='hidden sm:block' />
                    <p className='para text-lg font-extrabold '>Date of Birth :{' '}</p>
                    {
                      trimmedDateString ? ( <p>{trimmedDateString}</p>) : 
                      (<Link to="/dashboard/settings"><span className='text-sm text-tempPrimary font-bold cursor-pointer hover:text-teal-700 transition-all duration-100'>Add DOB</span></Link>)
                    }
                  </div>
                </div>

                <div className='flex flex-row items-center gap-y-0 gap-x-2 space-y-0 text-lg'>
                  <div className='flex flex-row items-center flex-wrap justify-start gap-2'>
                    <MdTransgender className='hidden sm:block' />
                    <p className='para text-lg font-extrabold '>Gender :</p>
                    {
                      gender ? ( <p>{gender}</p>) : 
                      (<Link to="/dashboard/settings"><span className='text-sm text-tempPrimary font-bold cursor-pointer hover:text-teal-700 transition-all duration-100'>Add Gender</span></Link>)
                    }
                  </div>
                </div>

                <div className='flex flex-row items-center gap-y-0 gap-x-2 space-y-0 text-lg'>
                  <div className='flex flex-row items-center flex-wrap justify-start gap-2'>
                    <MdPhone className='hidden sm:block' />
                    <p className='para text-lg font-extrabold '>Mobile :</p>
                    {
                      contactNumber ? ( <p>{contactNumber}</p>) : 
                      (<Link to="/dashboard/settings"><span className='text-sm text-tempPrimary font-bold cursor-pointer hover:text-teal-700 transition-all duration-100'>Add mobile number</span></Link>)
                    }
                  </div>
                </div>

                <div className='flex flex-row items-center gap-y-0 gap-x-2 space-y-0 text-lg'>
                  <div className='flex flex-row items-center flex-wrap justify-start gap-2'>
                    <MdBook className='hidden sm:block' />
                    <p className='para text-lg font-extrabold '>Blogs Published  :</p>
                    <p>{blogsCount}</p>
                  </div>
                </div>


              </div>
            </div>

        
        </div>
       
        
        {/* SAVED  NOTES  */}
        <div className='w-full flex flex-col gap-5 p-6 items-center rounded-md bg-[#f3f3f3] text-tempDark'>
          <div className='w-full flex flex-row flex-wrap justify-between items-center'>
              <h3 className='border-b-2 border-tempPrimary '>Saved Notes</h3>
              <Link to="/dashboard/notes">
                <h6 className=' text-tempDark  flex items-center gap-1 cursor-pointer hover:border-b-[1.3px] hover:border-tempPrimary transition-all duration-150 '>Show All Notes</h6>
              </Link>
          </div>
          <SavedNotes partial={true} />  
        </div>

        {/* SAVED PAPERS */}
        <div className='w-full flex flex-col gap-5 p-6 items-center rounded-md bg-[#f3f3f3] text-tempDark'>
          <div className='w-full flex flex-row flex-wrap justify-between items-center'>
              <h3 className='border-b-2 border-tempPrimary '>Saved Papers</h3>
              <Link to="/dashboard/notes">
                <h6 className=' text-tempDark  flex items-center gap-1 cursor-pointer hover:border-b-[1.3px] hover:border-tempPrimary transition-all duration-150 '>Show All Papers</h6>
              </Link>
          </div>
          <SavedPapers partial={true} />  
        </div>

         {/* Published Blogs */}
         <div className='w-full flex flex-col gap-5 p-6 items-center rounded-md bg-[#f3f3f3] text-tempDark'>
          <div className='w-full flex flex-row flex-wrap justify-between items-center'>
              <h3 className='border-b-2 border-tempPrimary '>Published Blogs</h3>
              <Link to="/dashboard/notes">
                <h6 className=' text-tempDark  flex items-center gap-1 cursor-pointer hover:border-b-[1.3px] hover:border-tempPrimary transition-all duration-150 '>Show All Blogs</h6>
              </Link>
          </div>
          <PublishedBlogs partial={true} />  
        </div>
        {
          modalData && (<CommonModal modalData = {modalData} />)
        }
    </div>
    
  )
}

export default MyProfile
