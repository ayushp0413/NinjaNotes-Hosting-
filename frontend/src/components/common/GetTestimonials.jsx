import React, { useEffect, useState } from 'react'
import { getAllTestimonials } from '../../services/operations/testimonialsAPI';
import Tesimonial from '../core/Home/Tesimonial';
import toast from 'react-hot-toast';


const GetTestimonials = () => {

    const [firstRow,setFirstRow] = useState([]);
    const [secondRow,setSecondRow] = useState([]);
    const [loading, setLoading] = useState(false);
  
  
    useEffect(() => {
        const  getTestimonials = async()=>{
            try
            {
              setLoading(true);
              const response = await getAllTestimonials();
              setFirstRow(response.slice(0, response?.length / 2));
              setSecondRow(response.slice(response?.length / 2));
              setLoading(false);
        
            }catch(err)
            {
                toast.error("Server Loading. Please wait");
                console.log("Error in fetching testimonials..");
            }
          }
       getTestimonials();
    },[])
  
    if(loading) return <div className='loader w-full h-full mt-40 absolute top-[26%] left-[50%]'></div>


  return (
    <div>
        {
          loading ? (<div className='text-xl text-tempDark'>Loading.....</div>) : 
          (<Tesimonial firstRow={firstRow} secondRow={secondRow} loading={loading} />)
        }    
    </div>
  )
}

export default GetTestimonials
