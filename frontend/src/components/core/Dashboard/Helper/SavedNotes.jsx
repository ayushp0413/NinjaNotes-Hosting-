import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TYPE_OF_CONTENT } from '../../../../utils/constants'
import CardSpotlightDemo from '../../../aceternity/SpotlightCards/spotlightCardComponent'
import { Link } from 'react-router-dom'
import {loadCart, setCart} from "../../../../slices/cartSlice";

const SavedNotes = ({partial}) => {

    const {cart} = useSelector((state) => state.cart);
    const {user} = useSelector((state) => state.profile);
    const userId = user?._id; 
    const dispatch = useDispatch();
    
    let savedNotes = [];

    if(cart && cart?.length>0)
    {
       savedNotes = cart.filter((item) => item?.type === TYPE_OF_CONTENT.NOTES);
       if(partial){
         savedNotes = savedNotes.splice(0,3);
        }
    }

    useEffect(() => {
      if (userId) {
        dispatch(loadCart({ userId }));
      }
    }, [userId]); 

  return (
    <>   
       {
         savedNotes?.length === 0 ? 
         (<div className='flex gap-2 items-center justify-center'>
            <p className='text-sm'>You haven't saved a notes yet!</p>
            <span className='text-sm underline text-blue-400'>
              <Link to={"/notes"}>Save you first Notes!!</Link>
            </span>
          </div>) : 
         (<div className='w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 mt-3 '>
          {
              userId && 
              savedNotes?.map((notes) => (
                <div key={notes._id} className='flex flex-row flex-wrap'>
                      <CardSpotlightDemo data={notes} userId={userId}/>
                </div>
              ))  
          }
          </div>)
        }
    </>
    )
  }

export default SavedNotes
