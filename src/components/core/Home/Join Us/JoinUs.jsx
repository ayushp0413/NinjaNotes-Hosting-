import React from 'react'
import img from '../../../../assets/images/joinUs.svg'
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router';

const JoinUs = () => {
  const navigate = useNavigate();
  const joinUsHandler = () => {
    navigate("/joinus")
  }
  return (
    <div className='w-11/12 max-w-maxContent text-black flex flex-col-reverse items-center justify-center  mx-auto lg:flex-row lg:items-center lg:justify-between  px-6 md:px-0 z-10'>
      <div data-aos="fade-right" data-aos-duration='1200' className='lg:w-[50%] flex flex-col items-center justify-center p-7 lg:items-start '>
        <h2 className=' heading text-center lg:text-left md:text-5xl text-tempDark '>
          Join Our Team Today!
        </h2>
        <p className='para text-center lg:text-left'>
          Contribute your coding skills and notes to be a part of our educational community.
        </p>
        <button onClick={joinUsHandler} className='btn w-50 flex flex-row justify-center items-center gap-2 bg-tempSecondary hover:bg-tempPrimary  transition-all duration-200'>
          Join Us
          <FaArrowRight className='' />
        </button>
      </div>

      <img data-aos="fade-left" data-aos-duration='1200' className='h-[400px] w-[600px] rounded-[30px]' src={img} alt='' />
    </div>
  )
}

export default JoinUs
