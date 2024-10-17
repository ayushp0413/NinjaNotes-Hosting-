import { useEffect, useState } from 'react'
import { cn } from '../../../lib/utils'
import Marquee from '../../magicui/Marquee'
import toast from 'react-hot-toast'
import ReactStars from 'react-rating-stars-component'
import { getAllTestimonials } from '../../../services/operations/testimonialsAPI'

// data will come from backend


const ReviewCard = ({ image, name, rating=0, review }) => {
  return (
    <figure
      className={cn(
        'relative w-80 h-40 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        <img className='rounded-full' width='32' height='32' alt='' src={image} />
        <div className='flex flex-col justify-center space-y-0'>
          <figcaption className='text-sm font-medium text-dargGreen'>
            {name}
          </figcaption>
          <span className='text-xs font-medium text-emerald-500'>
          <ReactStars
                count={5}
                value={rating}
                size={24}
                activeColor='#10b981'
                edit={false}
                isHalf={true}
              />
          </span>
        </div>
      </div>

      <blockquote className='mt-5 text-sm text-theme'>{review}</blockquote>
    </figure>
  )
}

const Tesimonial = ({firstRow, secondRow}) => {
  
  if (!firstRow || !secondRow) return <div className='loader mt-20 absolute top-[13rem] left-[45rem]'></div>;

  return (
    <>
      <div className='relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden '>
      <Marquee pauseOnHover className='[--duration:20s]'>
        {firstRow?.map(review => (
          <ReviewCard key={review._id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className='[--duration:20s]'>
        {secondRow?.map(review => (
          <ReviewCard key={review._id} {...review} />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div>
    </div>
    </>
  )
}

export default Tesimonial
