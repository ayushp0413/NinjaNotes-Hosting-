import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { createTestimonial } from '../../services/operations/testimonialsAPI';

import { useForm } from 'react-hook-form';
import ReactStars from "react-rating-stars-component";
import { IoClose } from 'react-icons/io5';


const Testimonial = ({setActive}) => {

    const {register, setValue, handleSubmit, formState:{errors}} = useForm();
    useEffect(()=> {
        setValue("name", "");
        setValue("rating", 0);
        setValue("review", "");
    },[]);

    const ratingChanged = (newRating) => {
        setValue("rating", newRating)
    }

    const onSubmit = async(data) => {
        try
        {    
            await createTestimonial(data);
            setValue("name","");
            setValue("rating",0);
            setValue("review","");

        }catch(err)
        {
            console.log("ERROR in TESTIMONIAL");
            toast.error(err);
        }
    }

  return (
    <>
    <div className='fixed inset-0 grid place-items-center z-[1000] overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
    <div className='flex flex-col bg-tempSecondary rounded-md overflow-hidden max-w-[650px] w-[540px]'>
        {/* Modal header */}
        <div className='flex justify-between bg-tempPrimary p-2'>
            <p className='text-tempDark font-bold'>Rate Ninja Notes</p>
            <button 
            onClick={() => {setActive(false)}}
            >
            <IoClose size={20}/>
            </button>
        </div>

        {/* Modal Body */}
        <div className='flex flex-col justify-center items-center mt-3'>
            <div className='flex flex-row items-center gap-3 '>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-sm font-bold text-tempDark'>Posting Publicly</p>
                    <p className='text-center -mt-2 text-tempDark'>Please share your experience with us. Rate Ninja Notes and write your reviews about website and our services.</p>
                </div>
            </div>

            <form
            onSubmit={handleSubmit(onSubmit)}
            className='mt-1 flex flex-col items-center w-full'>
                <ReactStars 
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                />
                <div className='w-11/12 flex flex-col gap-y-2 mb-5 mt-2'>
                    <input 
                        id='name'
                        placeholder='Enter your name'
                        {...register("name", {required:true})}
                        className='rounded-md min-h-[40px] w-full placeholder:text-sm outline-none border-b border-tempPrimary px-3'
                    />
                    {
                        errors.name && (
                            <span>
                                Please add your name 
                            </span>
                        )
                    }
                    <textarea 
                        id='review'
                        placeholder='Enter your reviews...'
                        {...register("review", {required:true})}
                        rows={4}
                        className='rounded-md min-h-[50px] w-full placeholder:text-sm placeholder:py-1 outline-none border-b border-tempPrimary px-3'
                    />
                    {
                        errors.review && (
                            <span>
                                Please add your name 
                            </span>
                        )
                    }
                </div>

                <div>
                    <button
                    type="submit"
                    className=' bg-tempPrimary px-3 py-1 rounded-md hover:bg-tempSecondary mb-4 hover:border-2 hover:border-tempPrimary'
                    >
                        Submit
                    </button>
                </div>

            </form>
        </div>
    </div>
    </div>
    </>
  )
}

export default Testimonial
