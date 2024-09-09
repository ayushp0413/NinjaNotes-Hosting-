import React from 'react'
import SavedPapers from './Helper/SavedPapers'


const MyPapers = () => {
  return (
    <div className='ml-[4rem] mr-3 md:mr-7 md:ml-[20rem] mx-auto text-4xl text-black bg-[#f3f3f3] rounded-lg'>
        <div className='w-full p-4 text-tempDark'>
            <div className='text-center flex flex-col'>
              <h2>Explore Your Papers</h2>
              <p className='-mt-1 text-[1rem] max-w-[910px] mx-auto opacity-95'>Explore all your saved papers in one convenient place. Simply keeping track of valuable papers, this page allows you to access and manage your papers effortlessly. You can view or remove any paper at any time, making it easy to stay organized and focused on your study. Keep your important documents within reach, all in one secure space.</p>
            </div>
            <div className=' mx-auto'>
              <SavedPapers partial={false} />
            </div>
        </div>
    </div>
  )
}

export default MyPapers
