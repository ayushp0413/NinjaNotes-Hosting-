import React from 'react'
import SavedNotes from './Helper/SavedNotes'
import HighlightText from '../../common/HighlightText'


const MyNotes = () => {
  return (
    <div className='ml-[4rem] mr-3 md:mr-7 md:ml-[20rem] mx-auto text-4xl text-black bg-[#f3f3f3] rounded-lg'>
        <div className='w-full p-4 text-tempDark'>
            <div className='text-center flex flex-col'>
              <h2>Explore Your Notes</h2>
              <p className='-mt-1 text-[1rem] max-w-[910px] mx-auto opacity-95'>Welcome to your personal collection of saved notes! Here, you can find all the important thoughts, ideas, and reminders you've kept safe. Easily browse through your notes or delete them when they're no longer needed. Keep track of your ideas and stay organized with your personalized notes page.</p>
            </div>
            <div className=' mx-auto'>
              <SavedNotes partial={false} />
            </div>
        </div>
    </div>
  )
}

export default MyNotes
