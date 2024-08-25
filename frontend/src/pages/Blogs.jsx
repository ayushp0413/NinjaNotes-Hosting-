// src/Blogs.js
import React, { useState, useEffect, useRef } from 'react';
import img from '../assets/images/bookLoader.gif'
import axios from 'axios';
import { getAllBlogs } from '../services/operations/BlogsAPI';
import { FaTags } from "react-icons/fa";
import { useNavigate } from 'react-router';
import logoImg from '../assets/images/minLogo.svg';

const API_KEY = '0cda72e516ba41289b31ed67269da1bb';

const Blogs = () => {
  const [topic, setTopic] = useState('technology');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const cache = useRef({});
  const navigate = useNavigate();

  const fetchWithRetry = async (url, retries = 3, backoff = 3000) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 429 && retries > 0) {
        console.warn(`Rate limited. Retrying in ${backoff} ms...`);
        await new Promise((resolve) => setTimeout(resolve, backoff));
        return fetchWithRetry(url, retries - 1, backoff * 2);
      }
      throw error;
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);

      // Check if the data for this topic is in cache
      if (cache.current[topic]) {
        setBlogs(cache.current[topic]);
        setLoading(false);
        return;
      }

      try {
        // const url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${API_KEY}`;
        // const data = await fetchWithRetry(url);
        // cache.current[topic] = data.articles; // Cache the data
        // setBlogs(data.articles);
        const data = await getAllBlogs();
        console.log("Data Fetched : ", data);
        cache.current[topic] = data.title; // Cache the data
        setBlogs(data);

      } catch (error) {
        console.error('Error fetching the news articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [topic]);

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setTopic(event.target.elements.topic.value);
  };

  const handleReadMore = (blog) => {
    let url = blog?.title?.replaceAll(" ","-");
    console.log("URL URL : ", url);
    localStorage.setItem('blog', JSON.stringify(blog));
    navigate(`/blogs/${url}`);
  }

  return (
    <>
      <div className="w-11/12 max-w-maxContent mx-auto mt-36 p-4">

        <h1 className="heading text-tempDark text-center mb-10">Blogs on {<span className='text-tempPrimary uppercase'>{topic}</span>}</h1>
        <form onSubmit={handleSearch} className="mb-6">
        <label className="block mb-2 text-xl font-bold" htmlFor="topic">
          Search for a Topic:
        </label>
        <input
          id="topic"
          name="topic"
          type="text"
          value={topic}
          onChange={handleTopicChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button type="submit" className="w-full btn bg-tempSecondary hover:bg-tempPrimary border border-tempPrimary">
          Search
        </button>
        </form>

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
          {blogs.map((blog) => (
            
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
                    blog?.tags.map((tag) => (
                      <div className='flex gap-3 justify-center items-center'>
                        <FaTags />
                        <p key={tag}>{tag}</p>
                      </div>
                    ))
                  }
              </div>
            
            </div>
          ))}
        </div>
      ) : 
      (
        <p>No blogs found.</p>
      )}
      <p>Writing your own blog will be coming soon....</p>
      </div>
    </>
  );
};

export default Blogs;