import React from 'react'
import { useSelector } from 'react-redux'
import { TYPE_OF_CONTENT } from '../../../../utils/constants'
import CardSpotlightDemo from '../../../aceternity/SpotlightCards/spotlightCardComponent'

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
         publishedBlogs?.length<=0 ? (<div>You not saved papers yet! Write your first Blog </div>) : 
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
