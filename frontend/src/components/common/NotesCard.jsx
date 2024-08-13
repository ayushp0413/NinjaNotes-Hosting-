import React from 'react'
import img from '../../assets/images/Homepage Image.png'
import { GoGoal } from 'react-icons/go'
import { MdFolderSpecial } from 'react-icons/md'

const NotesCard = () => {
  return (
    <div className='border border-tempSecondary shadow-md rounded-md h-[400px] w-[300px] flex flex-col '>
      <img className='w-full h-52 rounded-t-md' src={img} alt='' />

      <div className='px-2 flex flex-col '>
        <h3 className='mt-1'>OOPM</h3>
        <p className='leading-4 mt-0 text-sm'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
          numquam.
        </p>
        <div className='flex justify-between -mt-5'>
          <div className='flex justify-center items-center gap-2'>
            <MdFolderSpecial />
            <p>Special</p>
          </div>

          <div className='flex justify-center items-center gap-2 '>
            <GoGoal />
            <p>Placement Essential</p>
          </div>
        </div>
        <button className=' bg-tempSecondary hover:bg-tempPrimary transition duration-300 border-2 border-tempPrimary rounded-md btn '>Get Notes</button>
      </div>
    </div>
  )
}

export default NotesCard
