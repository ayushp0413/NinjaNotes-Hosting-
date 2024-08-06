
// src/Blogs.js
import React, { useState, useEffect, useRef } from 'react';
import img from '../assets/images/bookLoader.gif'
import axios from 'axios';

const API_KEY = '0cda72e516ba41289b31ed67269da1bb';

const Blogs = () => {
  const [topic, setTopic] = useState('technology');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const cache = useRef({});

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
        const url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${API_KEY}`;
        const data = await fetchWithRetry(url);
        cache.current[topic] = data.articles; // Cache the data
        setBlogs(data.articles);
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

  return (
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
      {loading ? (
        <div className='flex flex-col justify-center items-center mt-20 mx-auto'>
        <img src={img} height={75} width={75} alt="" className='mx-auto'/>
        <p className='para mx-auto mt-[-4px]'>Loading blogs....</p>
        </div>
      ) : blogs.length > 0 ? (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.guid} className="p-4 bg-white border-2 border-tempPrimary rounded shadow-md">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-500">{new Date(blog.pubDate).toLocaleDateString()}</p>
              <div
                className="mt-2 text-gray-700"
                dangerouslySetInnerHTML={{ __html: blog.description }}
              ></div>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
};

export default Blogs;









// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import img from '../assets/images/bookLoader.gif'

// const Blogs = () => {
//   const [topic, setTopic] = useState('python');
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const cache = useRef({});

//   const fetchWithRetry = async (url, retries = 3, backoff = 3000) => {
//     try {
//       const response = await axios.get(url);
//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.status === 429 && retries > 0) {
//         console.warn(`Rate limited. Retrying in ${backoff} ms...`);
//         await new Promise((resolve) => setTimeout(resolve, backoff));
//         return fetchWithRetry(url, retries - 1, backoff * 2);
//       }
//       throw error;
//     }
//   };

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       setLoading(true);

//       // Check if the data for this topic is in cache
//       if (cache.current[topic]) {
//         setBlogs(cache.current[topic]);
//         setLoading(false);
//         return;
//       }

//       try {
//         const url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/tag/${topic}`;
//         const data = await fetchWithRetry(url);
//         cache.current[topic] = data.items; // Cache the data
//         setBlogs(data.items);
//       } catch (error) {
//         console.error('Error fetching the Medium blogs:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, [topic]);

//   const handleTopicChange = (event) => {
//     setTopic(event.target.value);
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     setTopic(event.target.elements.topic.value);
//   };

//   return (
    // <div className="w-11/12 max-w-maxContent mx-auto mt-36 p-4">
    //   <h1 className="heading text-tempDark text-center mb-10">Blogs on {<span className='text-tempPrimary uppercase'>{topic}</span>}</h1>
    //   <form onSubmit={handleSearch} className="mb-6">
    //     <label className="block mb-2 text-xl font-bold" htmlFor="topic">
    //       Search for a Topic:
    //     </label>
    //     <input
    //       id="topic"
    //       name="topic"
    //       type="text"
    //       value={topic}
    //       onChange={handleTopicChange}
    //       className="w-full p-2 border border-gray-300 rounded mb-4"
    //     />
    //     <button type="submit" className="w-full btn bg-tempSecondary hover:bg-tempPrimary border border-tempPrimary">
    //       Search
    //     </button>
    //   </form>
    //   {loading ? (
    //     <div className='flex flex-col justify-center items-center mt-20 mx-auto'>
    //     <img src={img} height={75} width={75} alt="" className='mx-auto'/>
    //     <p className='para mx-auto mt-[-4px]'>Loading blogs....</p>
    //     </div>
    //   ) : blogs.length > 0 ? (

    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {blogs.map((blog) => (
    //         <div key={blog.guid} className="p-4 bg-white border-2 border-tempPrimary rounded shadow-md">
    //           <h2 className="text-xl font-semibold">{blog.title}</h2>
    //           <p className="text-gray-500">{new Date(blog.pubDate).toLocaleDateString()}</p>
    //           <div
    //             className="mt-2 text-gray-700"
    //             dangerouslySetInnerHTML={{ __html: blog.description }}
    //           ></div>
    //           <a
    //             href={blog.link}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="text-blue-500 hover:underline mt-2 block"
    //           >
    //             Read more
    //           </a>
    //         </div>
    //       ))}
    //     </div>
    //   ) : (
    //     <p>No blogs found.</p>
    //   )}
    // </div>
//   );
// };

// export default Blogs;
