import React from 'react'
import PublishedBlogs from './Helper/PublishedBlogs'

const MyBlogs = () => {
  return (
    <div className='relative w-full flex flex-col gap-4'>
      <div className='flex flex-col'>
        <div className='text-center flex flex-col  bg-[#f3f3f3] p-2 rounded-lg'>
          <h2>Published Blogs</h2>
          <p className='-mt-1 text-[1rem] max-w-[960px] mx-auto  hidden md:block' >Here’s where you can view all the blog posts you’ve published. This section showcases your work and allows you to manage your content with ease. Whether you’re looking to review your latest posts or edit previous entries, this page provides a comprehensive overview of your published blogs. Keep track of your contributions and engage with your audience through your published content. </p>
        </div>
                
        <div className=' w-full mx-auto bg-[#f3f3f3] p-2 rounded-lg mt-2'>
          <PublishedBlogs partial={false} />
        </div>
      </div>
    </div>
  )
}

export default MyBlogs
