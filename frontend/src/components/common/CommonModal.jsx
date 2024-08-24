import React from 'react'

const CommonModal = ({modalData}) => {

  return (
    <div className='fixed inset-0 grid place-items-center z-[1000] overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
      <div className='flex flex-col mx-auto bg-tempSecondary  rounded-md overflow-hidden border-2 border-tempPrimary  max-w-[300px] md:max-w-[550px] md:w-[440px] p-4'>

            <p className='text-center text-red-500 font-semibold -mt-1'>{modalData?.text1}</p>
            <p className=' text-tempDark text-[1rem] text-center -mt-6'>{modalData?.text2}</p>

            <div className='flex  justify-center items-center gap-3'>
                <button onClick={modalData?.btn1Handler} className='text-[1.3rem] px-3 py-1 border-tempDark border-[1.5px] rounded-md bg-tempPrimary'>{modalData?.btn1Text}</button>
                <button onClick={modalData?.btn2Handler} className='text-[1.3rem] px-3 py-1 border-tempDark border-[1.5px] rounded-md'>{modalData?.btn2Text}</button>
            </div>
      </div>
    </div>
  )
}

export default CommonModal
