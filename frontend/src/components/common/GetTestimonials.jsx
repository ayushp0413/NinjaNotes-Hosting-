import React, { useEffect, useState } from 'react'
import { getAllTestimonials } from '../../services/operations/testimonialsAPI';
import Tesimonial from '../core/Home/Tesimonial';
import toast from 'react-hot-toast';


const GetTestimonials = () => {

    const [firstRow,setFirstRow] = useState([]);
    const [secondRow,setSecondRow] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
  
    useEffect(() => {
        const  getTestimonials = async()=>{
            try
            {
              setLoading(true);
              setError(null);
              const response = await getAllTestimonials();
              if (!response || !Array.isArray(response)) {
                throw new Error('Invalid response format');
              }
              setFirstRow(response.slice(0, response?.length / 2));
              setSecondRow(response.slice(response?.length / 2));
              setLoading(false);
        
            }catch(err)
            {
              console.log("Error in fetching testimonials..");
              setError(err.message || 'Failed to fetch testimonials');
              toast.error("Server not running.Please wait");
            } finally {
              setLoading(false);
            }
          }
       getTestimonials();
    },[])
  
    if(loading) return <div className='loader w-full h-full mt-40 absolute top-[26%] left-[50%]'></div>


  return (
    <div>
        {
          loading ? (<div className='text-xl text-tempDark'>Loading.....</div>) : 
          (
            <div className='bg-[#f3f3f3] pt-10 -mt-4 z-10' >
              <div className=' mx-auto flex items-center justify-center '>
            <span className='heading bg-tempPrimary p-[6px] px-3 rounded-md w-fit mx-auto text-tempDark'>Testimonials</span>
            </div>
            <p className='para text-center w-11/12 mx-auto text-tempDark'>
              Hear from learners who have transformed their study habits and achieved outstanding results with our resources.
            </p>
            <Tesimonial firstRow={firstRow} secondRow={secondRow} loading={loading} />
            </div>
          )
        }    
    </div>
  )
}

export default GetTestimonials
