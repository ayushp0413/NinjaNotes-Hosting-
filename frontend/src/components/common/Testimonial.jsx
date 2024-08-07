import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { createTestimonial } from '../../services/operations/testimonialsAPI'

import { useForm } from 'react-hook-form'
import ReactStars from 'react-rating-stars-component'
import { IoClose } from 'react-icons/io5'

const Testimonial = ({ setActive }) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm()
  useEffect(() => {
    setValue('name', '')
    setValue('rating', 0)
    setValue('review', '')
  }, [])

  const ratingChanged = newRating => {
    setValue('rating', newRating)
  }

  const onSubmit = async data => {
    try {
      await createTestimonial(data)
      setValue('name', '')
      setValue('rating', 0)
      setValue('review', '')
    } catch (err) {
      console.log('ERROR in TESTIMONIAL')
      toast.error(err)
    }
  }

  return (
    <>
      <div className='fixed inset-0 grid place-items-center z-[1000] overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
        <div className='flex flex-col bg-tempSecondary  rounded-md overflow-hidden border-2 border-tempPrimary  max-w-[400px] md:max-w-[650px] md:w-[540px]'>
          {/* Modal header */}
          <div className='flex flex-col-reverse py-0 justify-between bg-tempPrimary p-2'>
            <p className='para text-2xl text-center mx-auto font-semibold mt-[-10px] pt-2 '>
              Rate Ninja Notes
            </p>
            <button
              className='w-10 ml-[-6px]'
              onClick={() => {
                setActive(false)
              }}
            >
              <IoClose size={30} />
            </button>
          </div>

          {/* Modal Body */}
          <div className='flex flex-col justify-center items-center mt-3'>
            <div className='flex flex-row items-center gap-3 px-2'>
              <div className='flex flex-col gap-0 '>
                <p className='text-center  mb-[-14px]'>
                  Please share your experience with us.
                </p>
                <p className='text-center'>
                  Rate Ninja Notes and write your reviews about website and our
                  services.
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className='mt-1 flex flex-col items-center w-full'
            >
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor='#ffd700'
              />
              <div className='w-11/12 flex flex-col gap-y-2 mb-5 mt-2'>
                <input
                  id='name'
                  placeholder='Enter your name'
                  {...register('name', { required: true })}
                  className='rounded-md min-h-[40px] w-full placeholder:text-sm outline-none border-b border-tempPrimary px-3'
                />
                {errors.name && <span>Please add your name</span>}
                <textarea
                  id='review'
                  placeholder='Enter your reviews...'
                  {...register('review', { required: true })}
                  rows={4}
                  className='rounded-md min-h-[50px] w-full placeholder:text-sm placeholder:py-1 outline-none border-b border-tempPrimary px-3'
                />
                {errors.review && <span>Please add your name</span>}
              </div>

              <div>
                <button
                  type='submit'
                  className='font-semibold bg-tempSecondary px-3 py-1 rounded-md mb-4 border-2 border-tempPrimary hover:bg-tempPrimary '
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
