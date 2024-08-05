import React from 'react'
import img from '../assets/images/errorImage.svg'

const Error = () => {
  return (
    <div className='w-11/12 max-w-maxContent mx-auto flex flex-col justify-center items-center'>
        <img className='mx-auto h-1/2 w-1/2 mt-20'  src={img} alt="" />
        <h1 className='heading text-tempPrimary mt-10 text-center'>Page Not Found</h1>
        <h3 className='para text-tempDark text-center'>Sorry for the inconvenience , The page you are looking for does not exist.</h3>
    </div>
  )
}

export default Error