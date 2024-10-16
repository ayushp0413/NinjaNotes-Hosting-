import React, { useEffect, useState } from 'react';
import { FaRegThumbsUp, FaRegThumbsDown, FaThumbsDown, FaThumbsUp, FaSignLanguage } from "react-icons/fa";

const BlogDetails = () => {
  
  const [blog, setBlog] = useState(null);
  const [liked,setLiked] = useState(false);
  const [disLiked,setDisLiked] = useState(false);
  
  const toogleLiked = () =>{
    if(!liked && disLiked)
      {
        // user wanted to like
        setDisLiked(!disLiked);
      } 
    setLiked(!liked)
  }
  const toogleDisLiked = () =>{
    if(liked && !disLiked)
      {
        // user wanted to dislike
        setLiked(!liked);
      } 
    setDisLiked(!disLiked)
  }

  useEffect(() => {
    const savedBlog = localStorage.getItem('blog');
    if (savedBlog) {
      setBlog(JSON.parse(savedBlog));
    }
  }, []);

  if (!blog) return <div className='loader mt-20 absolute top-[13rem] left-[45rem]'></div>;

  return (
    <div className='w-full mt-16 '>
      <div className='relative w-full bg-tempSecondary h-[50vh] flex flex-col  justify-center items-center'>
          <div className='flex w-11/12 flex-col justify-center items-center text-tempDark'>
            <h1>{blog?.title}</h1>
            <p className='text-center max-w-[70vw] text-tempDark'>{blog?.excerpt}</p>
          </div>
          <div className='mt-3'>
            <span>by- {blog?.author}</span>
          </div>
      </div>  
      
      <div className='relative w-11/12 mx-auto'>
        <div className='p-4' dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
  
      <div className=' bg-tempSecondary'>
          <p className='text-center pt-2'>Share your feedback</p>
          <div className='flex justify-center gap-3'>
            <div onClick={() => toogleLiked()} className='flex justify-center items-center gap-3 mb-2 cursor-pointer'>
              {
                  liked? (<FaThumbsUp size={23}  />) : (<FaRegThumbsUp size={23}/>) 
              }
            </div>
            <div onClick={() => toogleDisLiked()} className='flex justify-center items-center gap-3 mb-2 cursor-pointer'>
              {
                  disLiked? (<FaThumbsDown size={23} />) : (<FaRegThumbsDown size={23} />)
              }

            </div>
          </div>
        </div>
      


    </div>
  );
};

export default BlogDetails;
