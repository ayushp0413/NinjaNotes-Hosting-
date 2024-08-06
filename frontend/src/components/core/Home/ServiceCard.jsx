import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";


const ServiceCard = ({icon: Icon, heading, description}) => {

  return (
    <>
        <div className='relative bg-black text-tempDark w-[300px] h-[400px] rounded-[30px]'>
            <div className='absolute w-[300px] h-[400px] rounded-[30px] bg-grey  left-[6px] bottom-[6px] hover:left-0 hover:bottom-0 transition-all duration-200 text-black flex flex-col items-center justify-center p-[1rem] py-5 border-black border-2'>
                <Icon size={100} color="black" />
                <div className='flex flex-col justify-center items-center mt-4'>
                    <h3 className='font-groastek text-[32px] text-tempDark'>{heading}</h3>
                    <p className='font-groastek font-light text-center leading-6 -mt-3'>{description}</p>
                </div>
            
                <button className='flex flex-row justify-center items-center  bg-tempSecondary border border-tempPrimary hover:bg-tempPrimary  transition-all duration-300 px-4 rounded-full gap-x-4 '>
                <p className='para font-md my-3'>Learn More</p>
                <div className='bg-black h-10 w-10 rounded-full '>
                <FiArrowUpRight className='text-white h-10 w-10 hover:text-tempPrimary' />
                </div>
                
                </button>
            </div>
        </div>
         
    </>
  )
}

export default ServiceCard
