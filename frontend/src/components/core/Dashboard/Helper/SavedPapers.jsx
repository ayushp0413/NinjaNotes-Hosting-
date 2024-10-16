import React from 'react'
import { useSelector } from 'react-redux'
import { TYPE_OF_CONTENT } from '../../../../utils/constants'
import CardSpotlightDemo from '../../../aceternity/SpotlightCards/spotlightCardComponent'
import { Link } from 'react-router-dom'

const SavedPapers = ({partial}) => {

    const {cart} = useSelector((state) => state.cart);
    let savedPapers = [];

    if(cart && cart?.length>0)
    {
       savedPapers = cart.filter((item) => item?.type === TYPE_OF_CONTENT.PAPERS);
       console.log("Papars array : ", savedPapers);
       if(partial){
         savedPapers = savedPapers.splice(0,3);
        }
    }



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
