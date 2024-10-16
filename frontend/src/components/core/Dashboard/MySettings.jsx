import React, { useState } from 'react'
import { FileUpload } from '../../magicui/FileUpload'
import { Link, useNavigate } from 'react-router-dom'
import { RiLogoutBoxFill, RiLogoutBoxRFill } from "react-icons/ri";
import HighlightText from '../../common/HighlightText'
import { MdDelete } from 'react-icons/md'
import CommonModal from '../../common/CommonModal'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProfile, updateProfile, updateProfilePicture } from '../../../services/operations/profileAPI'
import ChangePassword from './Helper/ChangePassword';
import { logout } from '../../../services/operations/authAPI'
import toast from 'react-hot-toast';

const MySettings = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const [modalData, setModalData] = useState(null);
  const {user} = useSelector((state) => state.profile);
  const {token} = useSelector((state) =>state.auth);
  const dispatch = useDispatch();

  const [selectedFile, setSelectedFile] = useState(null);

  // Callback function to handle file selection from FileUpload
  const handleFileChange = (files) => {
    if (files.length > 0) {
      setSelectedFile(files[0]); // Allow only one file selection
    }
  };

  const handleFileCancel = () => {
    setSelectedFile(null);
  };

  // Handle Upload button click
  const handleProfileUpload = async() => {
    if (selectedFile) {
      console.log('Uploading file: ', selectedFile);

      const formData = new FormData();
      formData.append('displayPicture', selectedFile);

      try
      {
        await updateProfilePicture(formData, token, dispatch, navigate);
        // navigate("/dashboard/settings");

      }catch(err)
      {
        toast.error("Unable to Update profile picture");
      }
      
    }
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

  const [formData, setFormData] = useState({
    phoneNo: user?.profile?.contactNumber || '',
    gender: user?.profile?.gender || '',  
    dob: trimmedDateString || '',
    college: user?.profile?.college || '',
    about: user?.profile?.about || ''
  })

  function inputHandler (event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  async function submitHandler (event) {
    event.preventDefault()
    setLoading(true);

    console.log("Inside submit handler:", user?.profile?.dateOfBirth);

    try{
      await updateProfile(formData, token, dispatch);
    }catch(err)
    {
        console.log("Unable to update profile data, please try again");
        toast.error("Unable to update profile data, please try again")
    }
    setLoading(false);
  }

  const cancelUpdateDetails = () => {
      setFormData({
        phoneNo: '',
        gender: '',
        dob: '',
        college: '',
        about:''
      })
  }

  return (
    <>
    <div className='relative ml-[4rem] md:ml-[20rem] mr-2 mb-4 flex flex-col '>
      
      <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-y-4 justify-center items-start'>
       
        {/* ------------------------ Upload Photo ------------------------*/}
        <div className='w-full max-w-[320px] md:max-w-[570px] mx-auto flex flex-col gap-y-2 mb-6 md:mb-0'>
          <div className=' border border-dashed bg-white dark:bg-black border-tempPrimary dark:border-neutral-800 rounded-md   inline-block'>
            <FileUpload onChange={handleFileChange} />
          </div>
          <div className='flex justify-center gap-4 mt-5'>
            <button
              onClick={() => handleFileCancel} 
              className='btn px-5 md:px-20 md:py-4 border-2 border-black hover:bg-red-600 hover:text-black transition-all duration-300 '>
                Cancel
            </button>
            <button className='btn px-5 md:px-20 md:py-4 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 '
              onClick={handleProfileUpload}
              disabled={!selectedFile}>
              Upload Photo
            </button>
          </div>
        </div>

        {/* =============== SIGNUP FORM =============== */}
        <div className='w-full max-w-[330px] md:max-w-[570px] mx-auto  rounded-lg shadow-md border-2 border-tempPrimary  p-6 px-2 md:px-10'>
          <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10 '>
             Update
            <HighlightText text={' Profile Details'} className={'text-3xl'} />
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
                  value={user?.name}
                  readOnly
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
                  value={user?.email}
                  readOnly
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
                  onChange={inputHandler}
                  value={formData?.phoneNo}
                  className='w-full pr-4  border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer'
                  required
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
                  required
                  value={formData?.college}
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
                  required
                  value={formData?.gender}
                  onChange={inputHandler}
                  className='w-full pr-4 border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer  '
                >
                  Choose
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
                  required
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
                rows={1}
                required
                value={formData?.about}
                onChange={inputHandler}
                className='w-full pr-4 pt-3  border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-5 text-headingColor placeholder:text-textColor cursor-pointer'
              />
            </div>
            <div className='w-full max-w-full flex justify-end gap-4'>
              <div 
                onClick={cancelUpdateDetails}
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
      </div>


      {/* CHANGE PASSWORD */}
      <ChangePassword/>


      {/* ------------------------ Delete Section ------------------------*/}
        <div className='flex flex-col lg:flex-row'>
          
          <div className='relative p-5 w-fit m-4 flex flex-row border-2 border-tempPrimary bg-tempSecondary rounded-md '>
            {/* <div><RiLogoutBoxFill className='h-60 w-60 hidden md:block' /></div> */}
            <div className='flex flex-col justify-center mx-4'>
              <div className=' max-w-[640px] text-tempDark'>
                <h1 className='leading-5 text-4xl text-tempDarks'>Profile Logout</h1>
                <p className='leading-6 text-[1.2rem] '>Would you like to Logout?</p>
                <p className='text-[1rem] font-thin leading-4'>Are you sure to Log out your profile, there are more to explore on Ninja Notes.</p>
              </div>
              <button
              onClick={() => setModalData({
                        text1:"Logging Out ?",
                        text2:"Are you sure to Log out your profile, there are more to explore on Ninja Notes.",
                        btn1Text:"Logout",
                        btn2Text:"Cancel",
                        btn1Handler: () => {dispatch(logout(navigate))},
                        btn2Handler: () => {setModalData(null)},
                })} 
              className='btn px-10 md:px-24 w-fit flex justify-center items-center  gap-4 border-2 border-black bg-tempPrimary hover:bg-tempSecondary hover:text-black transition-all duration-300 '>
                  Logout Profile<RiLogoutBoxRFill  className='block md:hidden'/>
              </button>
            </div>
          </div>

          <div className='m-4 p-4 w-fit flex border-2 border-black  bg-red-500 rounded-md '>
            {/* <MdDelete className='h-60 w-60 hidden md:block' /> */}
            <div className='flex flex-col justify-center mx-4'>
              <div className=' max-w-[520px]'>
                <h1 className=' leading-5 text-4xl'>Delete Account</h1>
                <p className='leading-6 '>Would you like to delete account?</p>
                <p className='-mt-2 text-lg leading-4 font-thin'>This account may contain your saved notes, papers and written blogs. Deleting your account is permanent and will remove all the contain associated with it, and this can't be revert back.</p>
              </div>
              <button
              onClick={() => setModalData({
                        text1:"Delete Account?",
                        text2:"Are you sure to delete your account, your saved data will be lost.",
                        btn1Text:"Delete",
                        btn2Text:"Cancel",
                        btn1Handler: () => {deleteProfile(token,dispatch,navigate)},
                        btn2Handler: () => {setModalData(null)},
                })} 
              className='btn px-10 md:px-24 w-fit flex justify-center items-center  gap-4 border-2 border-black bg-red-400 hover:bg-red-600 hover:text-black transition-all duration-300 '>
                  Delete Account <MdDelete className='block md:hidden'/>
              </button>
            </div>
          </div>

        </div>
    </div>
    {
      modalData && (<CommonModal modalData={modalData} />)
    }
    </>
  )
}

export default MySettings
