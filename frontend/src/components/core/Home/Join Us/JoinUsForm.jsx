import React, { useEffect, useState } from 'react'
import signupImg from '../../../../assets/images/joinUsFormImage.svg'
import { joinUs } from '../../../../services/operations/joinusAPI'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { HashLoader } from 'react-spinners'
import { PiSelectionSlash } from 'react-icons/pi'
import Footer from '../../../common/Footer'

const JoinUsForm = () => {

  
  const navigate = useNavigate();
  const {register, handleSubmit, reset, formState:{errors, isSubmitSuccessful}} = useForm();
  const [loading, setLoading] = useState(false);

  const joinUsFromSubmit = async(data) => {
    setLoading(true); 
    try
     {
        console.log("DATA: ", data);
        joinUs(data);

     }catch(err)
     {
        console.log("Error in form submitting: ", err);
     }
     setLoading(false);
  }

  useEffect(()=>{
    reset({
        email:"",
        name:"",
        github:"",
        phoneNo:"",
        message:""
    })
 },[reset, isSubmitSuccessful]);



  return (
    <div>
      <div className='w-11/12 max-w-maxContent mx-auto px-5 lg:px-0 mt-28'>
      <h1 data-aos="fade-down" data-aos-duration='1200' className='font-semibold leading-[40px] text-4xl md:text-6xl text-center '>Let's Create Something Awesome Together!</h1>

      <div className='grid grid-cols-1 lg:grid-cols-2'>

        {/* ---------------- IMAGE ---------------- */}
        <div data-aos="fade-right" data-aos-duration='1200' className='hidden lg:block my-auto'>
          <figure className='rounded-lg'>
            <img src={signupImg} alt='' className='w-full rounded-l-lg ' />
          </figure>
        </div>

        {/* ---------------- SIGNUP FORM ---------------- */}
        <div className='rounded-l-lg lg:pl-16 py-10' data-aos="fade-left" data-aos-duration='1200'>
        
          <form onSubmit={handleSubmit(joinUsFromSubmit)}>
            <div className='mb-5'>
              <input
                type='text'
                id='name'
                placeholder='Full Name'
                name='name'
                className='w-full pr-4 py-3 border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer'
                {...register("name",{required:true})}
              />
              {
                errors.name && (<span className=' text-tempPrimary text-xs'>Please Enter your name!</span>)    
              }
            </div>

            <div className='mb-5'>
              <input
                type='email'
                id='email'
                placeholder='Enter your email'
                name='email'
                {...register("email",{required:true})}
                className='w-full pr-4 py-3 border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer'
              />
              {
                errors.email && (<span className=' text-tempPrimary text-xs'>Please Enter your email!</span>)
              }
            </div>

            <div className='mb-5'>
              <input
                type='tel'
                placeholder='Enter your mobile Number'
                name='phoneNo'
                {...register("phoneNo",{required:true})}
               className='w-full pr-4 py-3 border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer'
              />
              {
                errors.phoneNo && (<span className=' text-tempPrimary text-xs'>Please Enter your Phone Number!</span>)
              }
            </div>

            <div className='mb-5'>
              <input
                type='text'
                id='github'
                placeholder='Enter your Github Link'
                name='github'
                {...register("github",{required:true})}
                className='w-full pr-4 py-3 border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer'
              />
              {
                errors.github && (<span className=' text-tempPrimary text-xs'>Please Enter your Github Profile!</span>)
              }
            </div>

            

            <div className='mb-5'>
              <textarea
                id='message'
                placeholder='Why Us ?'
                name='message'
                {...register("message",{required:true})}
                className='w-full pr-4 py-3 border-b border-solid border-tempPrimary focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer'
              />
              {
                errors.message && (<span className=' text-tempPrimary text-xs'>Please Enter your your message!</span>)
              }
            </div>

            <button
              type='submit'
              className='w-full bg-tempSecondary text-tempDark text-xl font-semibold py-2 rounded-md hover:bg-tempPrimary transition-all duration-200'
            >
            {
              loading ? <HashLoader size={35} color='#ffffff'/> : "Submit"
            }
            </button>   
          </form>
        </div>
      </div>
      </div>
      
      <Footer />
    </div>

    
  )
}

export default JoinUsForm
