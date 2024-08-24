import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import notesImg1 from "../assets/images/notesImg1.jpeg"
import notesImg2 from "../assets/images/notesImg2.jpeg"
import { getNotesForSubjects } from '../services/operations/getNotesForSubjects';
import { useParams } from 'react-router';
import Testimonial from '../components/common/Testimonial';
import { BorderBeam } from '../components/magicui/BorderBeam';
import { PiStudentFill } from "react-icons/pi";
import { BiBullseye } from "react-icons/bi";
import { LiaUserNinjaSolid } from "react-icons/lia";
import { MdAccessTime } from "react-icons/md";
import { MdLayers } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../slices/cartSlice';

const NotesDetails = () => {

  const [notes, setNotes] = useState(null);
  const [loading, setLoading] = useState(false);
  const {course, branch, sem, subject, unit } = useParams();  
  const [active, setActive] = useState(false);
  const {token} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getAllNotes = async() => {  
    try
    {
      setLoading(true);
      console.log("Api Calling....");
      const result = await getNotesForSubjects(course, branch, sem , subject, unit);
      if(result.length === 0){
        toast.error("No data, We will upload soon");
      }
      if(!result){
        toast.error("Unable to fetch notes");
      }

      console.log("RESULT NOTES : ", result);
      setNotes(result);
      setLoading(false);

    }catch(err)
    {
      console.log("Error in fetching notes");
      toast.error("Unable to fetch Notes");
    }
  }

  const saveNotes = () => {
    if(!token){
      toast.error("Please Login to Save Notes");
      return;
    } 
    console.log("NOTES NOTES : ", notes?.[0]);
    dispatch(addToCart(notes[0]));  
    
}

  useEffect(() => {
    getAllNotes(); // we will call 
  },[])


  return (
    <div className='mt-40 w-11/12 max-w-maxContent mx-auto relative flex flex-col justify-center items-center'>
    {
      !loading && notes?.length > 0 && (
       notes?.map((item, index) => (
        <div className='flex flex-col justify-center items-center -mt-10  transition-all duration-300ms'>
        <div key={index} className='relative flex flex-col  items-center bg-tempSecondary justify-between overflow-hidden rounded-lg  gap-x-2 p-2 transition-all duration-200  '>
        <BorderBeam size={450} duration={9} delay={5} />
        <img
          className='rounded-md transition-all duration-300 '
          src={notesImg2}
          width={380}
          alt=''
        />
        <div className='flex flex-col p-2 text-tempDark'>
          <div className='flex flex-col items-start'>
            <h3 className='text-2xl md:text-3xl font-gorastek text-tempDark '>{item?.subject}</h3>
            <p className='font-semibold -mt-3 text-xl'>{item?.unit} Notes</p>          
            <div className=' w-full grid grid-cols-2 place-items-start -mt-4'>
              <div className='flex  justify-center items-center gap-2'><PiStudentFill size={20} /> <p>{item?.course}</p></div>
              <div className='flex  justify-center items-center gap-2'><MdLayers size={18} /> <p>{item?.branch}</p></div>
              <div className='flex  justify-center items-center gap-2'><LiaUserNinjaSolid size={22} /> <p>Ninja Notes</p></div>
              <div className='flex  justify-center items-center gap-2'><MdAccessTime size={19} /> <p>{item?.sem}</p></div>

            </div>       
          </div>

          <div className='flex gap-3 justify-center items-center'>
            <div className= ' text-tempDark bg-tempPrimary  p-3 rounded-md text-center'>
            <a href={item?.content} target='blank' onClick={()=>setActive(true)} className='font-bold text-lg text-tempDark'>Get your notes</a>
            </div>


            <div onClick={saveNotes} className='  text-tempDark bg-tempPrimary  p-3 rounded-md text-center'>
                <button className='font-bold text-lg text-tempDark'>Save Notes to Profile</button>
            </div>
          </div>
         


        </div>
        </div>
        </div> 
      )))
    }
    
    

    {active && (<Testimonial setActive={setActive}/>)}
    </div>
  )
}

export default NotesDetails
