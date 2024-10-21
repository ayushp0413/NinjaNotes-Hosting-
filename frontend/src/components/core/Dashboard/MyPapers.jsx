import React from 'react'
import SavedPapers from './Helper/SavedPapers'


const MyPapers = () => {
  return (
    <div className='ml-[4rem] mr-3 md:mr-7 md:ml-[20rem] mx-auto text-4xl text-black'>
        <div className='flex flex-col'>
            <div className='text-center flex flex-col  bg-[#f3f3f3] p-2 rounded-lg'>
              <h2>Explore Your Papers</h2>
              <p className='-mt-1 text-[1rem] max-w-[910px] mx-auto opacity-95 hidden md:block'>Explore all your saved papers in one convenient place. Simply keeping track of valuable papers, this page allows you to access and manage your papers effortlessly. You can view or remove any paper at any time, making it easy to stay organized and focused on your study. Keep your important documents within reach, all in one secure space.</p>
            </div>
            <div className=' mx-auto'>
              <SavedPapers partial={false} />
            </div>
        </div>
    </div>
  )
}

export default MyPapers
