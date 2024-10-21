import React, { useState } from 'react'
import notesImg1 from "../../assets/images/notesImg1.jpeg"
import { GoGoal } from 'react-icons/go'
import { MdFolderSpecial } from 'react-icons/md'
import { BorderBeam } from '../magicui/BorderBeam'


const NotesCard = ({notes}) => {

  return (
    <div className='relative over shadow-md rounded-md max-w-[320px] h-[420px] max-h-[420px] flex flex-col '>
      <BorderBeam size={450} duration={9} delay={5} />
      <img className='w-full p-1 rounded-lg  h-52 rounded-t-md object-cover' src={notesImg1} alt='' />

      <div className='flex flex-col px-2 w-full h-full justify-between '>
        <h3 className='mt-1'>{notes?.subject}</h3>
        <p className='leading-4 mt-0 text-sm'>{notes?.description.substring(0,100) + "..."}</p>
        
        <div className='flex justify-between -mt-5'>
          <div className='flex justify-center items-center gap-2'>
            <MdFolderSpecial />
            <p>{notes?.course || "Special"}</p>
          </div>

          <div className='flex justify-center pl-4  items-center gap-2 '>
            <GoGoal />
            <p className='leading-4 md:leading-7'>{notes?.company || "Placement Essentials"}</p>
          </div>
        </div>

        <div className='flex flex-row justify-between items-center mx-auto'>
          <a href={notes?.content} target='blank' className=''>
            <button className='bg-tempSecondary hover:bg-tempPrimary transition duration-300 border-2 border-tempPrimary rounded-md btn mb-3'>Get Notes</button>
          </a>
        </div>

      </div>
    </div>
  )
}

export default NotesCard
