// src/Blogs.js
import React, { useState, useEffect, useRef } from 'react';
import img from '../assets/images/bookLoader.gif'
import axios from 'axios';
import { getAllBlogs } from '../services/operations/BlogsAPI';
import { FaTags } from "react-icons/fa";
import { useNavigate } from 'react-router';
import logoImg from '../assets/images/minLogo.svg';
import HighlightText from '../components/common/HighlightText';


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [show, setShow] = useState(6);

  const [query, setQuery] = useState('');
  const [debouncingQuery, setDebouncingQuery] = useState('');

  const handleSearch = () => {
    setQuery(query.trim());
    console.log("Handle search : ", query);
  };

  const handleReadMore = (blog) => {
    let url = blog?.title?.replaceAll(" ","-");
    localStorage.setItem('blog', JSON.stringify(blog));
    navigate(`/blogs/${url}`);
  }

  const fetchBlogs = async (query) => {
    setLoading(true);
    try {
      const data = await getAllBlogs(query);
      setBlogs(data);

    } catch (error) {
      console.error('Error fetching the news articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () =>{
    setShow(show+3);
  }

  useEffect(() => {
    fetchBlogs(query);
  }, []);

  useEffect(()=>{
    const timeout = setTimeout(() => {
      fetchBlogs(query);
    },700)

    return () => clearTimeout(timeout);
  },[query]);



  return (
    <>
      <div className="w-11/12 max-w-maxContent mx-auto mt-24 p-4">

        <h1 className="heading text-tempDark text-center mb-10">Blogs on {<HighlightText text={`${query || "___"}`} className="max-w-[100px]"/>}</h1>
        <div>
          <label className="block mb-2 text-xl font-bold" htmlFor="topic">
            Search for Topic or Category :
          </label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='for eg. Web Development'
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <button type="submit" className="w-full btn bg-tempSecondary hover:bg-tempPrimary border border-tempPrimary mb-5"
          onClick={handleSearch}
          >
            Search
          </button>
        </div>

      {/* BLOG CARDS STARTED */}

      {
        loading ? (
        <div className='flex flex-col justify-center items-center mt-20 mx-auto'>
        <img src={img} height={75} width={75} alt="" className='mx-auto'/>
        <p className='para mx-auto mt-[-4px]'>Loading blogs....</p>
        </div>
      ) : 
      
      blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs?.slice(0,show)?.map((blog) => (
            
            <div key={blog._id} className="p-4 bg-white border-2 border-tempPrimary rounded shadow-md">
              <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center gap-2'>
                  <img src={logoImg} width={20}/>
                  <p className=' font-semibold'>{blog?.author}</p>
                </div>
                <p className="text-gray-500">{new Date(blog.updatedAt).toLocaleDateString()}</p>
              </div>

              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="mt-2 text-gray-700">{`${blog?.excerpt?.length > 230 ? `${blog.excerpt.substring(0, 230)}...` : blog?.excerpt}`}</p>
              <a onClick={() => handleReadMore(blog)}>Read More</a>
              
              <div className='flex justify-between items-center'>
                  {
                    blog?.tags.splice(0,3).map((tag) => (
                      <div  key={tag} className='flex flex-col md:flex-row flex-wrap gap-x-3 justify-center items-center'>
                        <FaTags className='hidden sm:block' />
                        <p>{tag}</p>
                      </div>
                    ))
                  }
              </div>
            
            </div>
          ))}
          
        </div>
      ) : 
      (
        <p className='w-full text-center'>No blogs found for {<span className=' text-tempDark font-bold'>{query}!</span>}</p>
      )}
      {
        show < blogs?.length && (
        <button onClick={() => loadMore()} className='p-2 bg-tempPrimary mx-auto flex mt-10 '>Read More</button>)
      }
      <p className=' p-2 bg-tempPrimary mx-auto flex justify-center mt-10 text-center'>Writing your own blog will be coming soon....</p>
      </div>
    </>
  );
};

export default Blogs;