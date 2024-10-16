import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import notesImg1 from "../assets/images/notesImg1.jpeg"
import notesImg2 from "../assets/images/notesImg2.jpeg"
import logoImg from '../assets/images/minLogo.svg';
import { IoToday } from "react-icons/io5";
import { getNotesForSubjects } from '../services/operations/getNotesForSubjects';
import { useParams } from 'react-router';
import Testimonial from '../components/common/Testimonial';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
import HighlightText from '../components/common/HighlightText';

const NotesDetails = () => {

  const [notes, setNotes] = useState(null);
  const [loading, setLoading] = useState(false);
  const {course, branch, sem, subject } = useParams();  
  const [active, setActive] = useState(false);
  const {token} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getAllNotes = async() => {  
    try
    {
      setLoading(true);
      console.log("Api Calling....");
      const result = await getNotesForSubjects(course, branch, sem , subject);
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

  const saveNotes = (index) => {
    if(index < 0) 
      {
          console.log("Invalid index");
          return;
      }
      if(!token)
      {
        toast.error("Please Login to Save Notes");
        return;
      } 
  
      // creating our own object to store in cart.
      const notesToSave = {
        _id : notes[0]?.content[index]._id,
        type : notes[0]?.type,
        branch : notes[0]?.branch,
        course : notes[0]?.course,
        sem : notes[0]?.sem,
        subject : notes[0]?.subject,
        content : {link: notes[0]?.content[index].link , unit:notes[0]?.content[index].unit},  
      }
      dispatch(addToCart(notesToSave)); 
  }

  useEffect(() => {
    getAllNotes(); // we will call 
  },[])

  if(loading)
  {
    return (<div className='loader'></div>)
  }


  return (

    <div className='mt-16 w-full mx-auto relative flex flex-col justify-center items-center'>
      
      <div className='w-full bg-tempSecondary flex flex-col justify-center items-center'>
        <div className='w-11/12 max-w-maxContent py-12 px-5 '>
          <h2>Ninjas Notes are ready. Get your Notes & be more productive.</h2>
          <p>Free to access. Easy to use. Just ask and Ninja Notes can help with notes, papers, articles, and more.</p>
          <div>
            <h3>Subject: <HighlightText text={`${subject}`} />  </h3>
            <p>Branch: {branch}</p>
            <p>Semester: {sem}</p>
          </div>
        </div>
      </div>

      <div className='relative w-full flex flex-row flex-wrap gap-x-5 justify-center items-center  transition-all duration-300ms mt-8'>
      {
        !loading && notes?.length > 0 && (
          notes[0]?.content?.map((item, index) => (
            <div className='flex flex-col hover:scale-105 transition-all duration-200'>  
              <a href={item?.link} target='blank' onClick={() => setActive(true)} className='text-tempDark'>
                <div key={index} className='flex flex-col items-center bg-tempSecondary justify-between overflow-hidden rounded-b-none rounded-lg  gap-x-2 p-2 transition-all duration-200  '>
                  
                  <div className='flex flex-row w-full justify-start items-center gap-4'>
                    <img src={logoImg} width={25} />  
                    <p>{subject.length > 30 ? subject.substring(0,30)+"..." :subject}</p>  
                  </div>
                  <img  src={notesImg2} width={300}/>
                  <div className='w-full flex gap-2 justify-center items-center'>
                    <IoToday />
                    <p>{`${item?.unit < 6 ? `Unit ${item?.unit}` : "Unit 1 to 5"} `}</p>
                  </div>
                  
                </div>
              </a>
              <div onClick={() => saveNotes(index)} className='mt-1 text-tempDark bg-tempPrimary p-2 rounded-t-none rounded-b-lg text-center mb-12  hover:border-b-2 border-b-tempDark'>
                <button className='font-bold text-lg text-tempDark cursor-pointer'>Save Notes to Profile</button>
              </div>
            </div>            
        )))
      }
      </div> 

    {active && (<Testimonial setActive={setActive}/>)}
    </div>
  )
}

export default NotesDetails


// OLDER CODE FOR GET NOTES
    {/* {
      !loading && notes?.length > 0 && (
       notes?.map((item, index) => (
        <div className='flex flex-col justify-center items-center -mt-10  transition-all duration-300ms'>
        <div key={index} className='relative max-w-[410px] flex flex-col items-center bg-tempSecondary justify-between overflow-hidden rounded-lg  gap-x-2 p-2 transition-all duration-200 '>
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
            <p className='font-semibold -mt-3 text-xl'>Full Package</p>          
            <div className=' w-full grid grid-cols-2 place-items-start -mt-4'>
              <div className='flex  justify-center items-center gap-2'><PiStudentFill size={20} /> <p>{item?.course}</p></div>
              <div className='flex  justify-center items-center gap-2'><MdLayers size={18} /> <p>{item?.branch}</p></div>
              <div className='flex  justify-center items-center gap-2'><LiaUserNinjaSolid size={22} /> <p>Ninja Notes</p></div>
              <div className='flex  justify-center items-center gap-2'><MdAccessTime size={19} /> <p>{item?.sem}</p></div>

            </div>       
          </div>

          <div className='flex gap-3 justify-center items-center'>
            <div className= ' text-tempDark bg-tempPrimary  p-3 rounded-md text-center'>
            <a href={item?.content[0]?.link} target='blank' onClick={()=>setActive(true)} className='font-bold text-lg text-tempDark'>Get your notes</a>
            </div>

            <div onClick={saveNotes} className='  text-tempDark bg-tempPrimary  p-3 rounded-md text-center'>
                <button className='font-bold text-lg text-tempDark'>Save Notes to Profile</button>
            </div>
          </div>
         


        </div>
        </div>
        </div> 
      )))
    } */}