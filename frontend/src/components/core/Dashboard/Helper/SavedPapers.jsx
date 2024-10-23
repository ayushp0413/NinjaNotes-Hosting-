import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TYPE_OF_CONTENT } from '../../../../utils/constants'
import CardSpotlightDemo from '../../../aceternity/SpotlightCards/spotlightCardComponent'
import { Link } from 'react-router-dom'
import { loadCart } from '../../../../slices/cartSlice'

const SavedPapers = ({partial}) => {

    const {cart} = useSelector((state) => state.cart);
    const {user} = useSelector((state) => state.profile);
    const userId = user?._id;
    const dispatch = useDispatch();
    let savedPapers = [];

    if(cart && cart?.length>0)
    {
       savedPapers = cart.filter((item) => item?.type === TYPE_OF_CONTENT.PAPERS);
       if(partial){
         savedPapers = savedPapers.splice(0,3);
        }
    }
    
    useEffect(() => {
      dispatch(loadCart({userId}));
    },[]);

  return (
    <>   
       {
         savedPapers?.length<=0 ? 
         (<div className='flex gap-2 items-center justify-center'>
            <p className='text-sm'>You haven't saved a paper yet!</p>
            <span className='text-sm underline text-blue-400'>
              <Link to={"/papers"}>Save you first Papers!!</Link>
            </span>
          </div>) : 
         (<div className='w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 mt-3 '>
          {
              savedPapers?.map((paper) => (
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

export default SavedPapers
