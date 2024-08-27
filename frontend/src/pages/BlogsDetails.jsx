import React, { useEffect, useState } from 'react';

const BlogDetails = () => {
  
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const savedBlog = localStorage.getItem('blog');
    if (savedBlog) {
      setBlog(JSON.parse(savedBlog));
    }
  }, []);

  if (!blog) return <div className='loader mt-20 absolute top-[13rem] left-[45rem]'></div>;

  return (
    <div className='mt-20 w-11/12 max-w-maxContent mx-auto text-black border rounded-md shadow-md my-6 '>
      {/* <h1 className='text-center text-tempDark leading-10 mb-4 my-6'>{blog.title}</h1> */}
      <div className='p-4' dangerouslySetInnerHTML={{ __html: blog.content }} />
      <p className='text-tempDark text-center'>Author - {blog?.author}</p>

    </div>
  );
};

export default BlogDetails;
