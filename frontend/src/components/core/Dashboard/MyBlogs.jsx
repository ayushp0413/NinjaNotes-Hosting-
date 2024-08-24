import React from 'react'
import PublishedBlogs from './Helper/PublishedBlogs'

const MyBlogs = () => {
  return (
    <div className='ml-[4rem] mr-3 md:mr-7 md:ml-[20rem] mx-auto text-4xl text-black'>
        <div className='w-full'>
            <div className='text-center flex flex-col'>
              <h2>Explore your Blogs</h2>
              <p className='-mt-1 text-[1rem] max-w-[800px] mx-auto'>lorem 2ed ewksdnvo dfv sdv dfxv  v d sdfljlsvld f;v dfvd;fv kdz ;vh dzfh bv dfhbdhfkbx dkfxbk df b  fvpdfxhvodhf vo o h dzfh bv dfhbdhfkbx dkfxbk df b  fvpdfxhvodhf  </p>
            </div>
            <div className=' mx-auto'>
              <PublishedBlogs partial={false} />
            </div>
        </div>
    </div>
  )
}

export default MyBlogs