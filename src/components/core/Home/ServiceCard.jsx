import React from 'react'


const ServiceCard = ({icon: Icon, heading, description, btnText}) => {

  return (
    <>
        <div className='relative bg-black w-[300px] h-[400px] rounded-[30px]'>
            <div className='absolute w-[300px] h-[400px] rounded-[30px] bg-[#7B9367] left-[6px] bottom-[6px] hover:left-0 hover:bottom-0 transition-all duration-200 text-white flex flex-col items-center justify-center p-[1rem] py-5'>
                <Icon size={100} color="#f3f3f3" />
                <div className='flex flex-col justify-center items-center mt-4'>
                    <h3 className='font-groastek text-[32px]'>{heading}</h3>
                    <p className='font-groastek font-light text-center -mt-3'>{description}</p>
                </div>
            
                <button className=' bg-dargGreen py-4 px-20 rounded-full text-xl'>{btnText}</button>
            </div>
        </div>
         
    </>
  )
}

export default ServiceCard
