import React from 'react'
import { useSelector } from 'react-redux'
import { TYPE_OF_CONTENT } from '../../../../utils/constants'
import CardSpotlightDemo from '../../../aceternity/SpotlightCards/spotlightCardComponent'
import { Line } from 'three'
import { Link } from 'react-router-dom'

const PublishedBlogs = ({partial}) => {


    //  data will be come from API
    const {cart} = useSelector((state) => state.cart);
    let publishedBlogs = [];

    if(cart && cart?.length>0)
    {
       publishedBlogs = cart.filter((item) => item?.type === TYPE_OF_CONTENT.BLOGS);
       if(partial){
         publishedBlogs = publishedBlogs.splice(0,3);
        }
    }



  return (
    <>   
       {
         publishedBlogs?.length<=0 ? 
         (
          <div className='flex gap-2 items-center justify-center'>
            <p className='text-sm'>You haven't published a blog yet!</p>
            <span className='text-sm underline text-blue-400'>
              <Link to={"/blogs"}>Publish you first blog!!</Link>
            </span>
          </div>
         ) : 
         (<div className='w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 mt-3 '>

          {
              publishedBlogs?.map((paper) => (
                <div key={paper._id} className=''>
                      <CardSpotlightDemo data={paper}/>
                </div>
              ))  
          }
          </div>)
        }
    </>
    )
  }

export default PublishedBlogs
