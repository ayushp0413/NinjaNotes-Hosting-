import React from 'react'
import SavedNotes from './Helper/SavedNotes'
import HighlightText from '../../common/HighlightText'


const MyNotes = () => {
  return (
    <div className='relative w-full flex flex-col gap-4'>
      <div className='flex flex-col'>
        <div className='text-center flex flex-col bg-[#f3f3f3] p-2 rounded-lg'>
          <h2>Explore Your Notes</h2>
          <p className='-mt-1 text-[1rem] max-w-[910px] mx-auto opacity-95  hidden md:block'>Welcome to your personal collection of saved notes! Here, you can find all the important thoughts, ideas, and reminders you've kept safe. Easily browse through your notes or delete them when they're no longer needed. Keep track of your ideas and stay organized with your personalized notes page.</p>
        </div>
               
        <div className='w-full mx-auto bg-[#f3f3f3] p-2 rounded-lg mt-2'>
            <SavedNotes partial={false} />
          </div>
      </div>
    </div>
  )
}

export default MyNotes
