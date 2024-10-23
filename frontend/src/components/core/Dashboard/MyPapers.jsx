import React from 'react'
import SavedPapers from './Helper/SavedPapers'


const MyPapers = () => {
  return (
    <div className='relative w-full flex flex-col gap-4'>
        <div className='flex flex-col'>
            <div className='text-center flex flex-col  bg-[#f3f3f3] p-2 rounded-lg'>
              <h2>Explore Your Papers</h2>
              <p className='-mt-1 text-[1rem] max-w-[910px] mx-auto opacity-95 hidden md:block'>Explore all your saved papers in one convenient place. Simply keeping track of valuable papers, this page allows you to access and manage your papers effortlessly. You can view or remove any paper at any time, making it easy to stay organized and focused on your study. Keep your important documents within reach, all in one secure space.</p>
            </div>
            <div className='w-full mx-auto bg-[#f3f3f3] p-2 rounded-lg mt-2'>
              <SavedPapers partial={false} />
            </div>
        </div>
    </div>
  )
}

export default MyPapers
