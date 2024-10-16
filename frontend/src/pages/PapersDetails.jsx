import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import notesImg1 from "../assets/images/notesImg1.jpeg"
import { GoBookmark, GoBookmarkFill } from "react-icons/go";
import logoImg from '../assets/images/minLogo.svg';
import { IoToday } from "react-icons/io5";
import { useParams } from 'react-router';
import Testimonial from '../components/common/Testimonial';
import { BorderBeam } from '../components/magicui/BorderBeam';
import { PiStudentFill } from "react-icons/pi";
import { BiBullseye } from "react-icons/bi";
import { LiaUserNinjaSolid } from "react-icons/lia";
import { MdAccessTime } from "react-icons/md";
import { MdLayers } from "react-icons/md";
import HighlightText from "../components/common/HighlightText"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
import { getPapersForSubject } from '../services/operations/PapersAPI';

const PapersDetails = () => {

  const [papers, setPapers] = useState(null);
  const [loading, setLoading] = useState(false);
  const {course, examType, branch, sem, subject } = useParams();  

  const [active, setActive] = useState(false);
  const [save, setSave] = useState(false);
  const {token} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getAllPapers = async() => {  
    try
    {
      setLoading(true);
      const result = await getPapersForSubject(course, examType, branch, sem , subject);
      if(result.length === 0){
        toast.error("No data, We will upload soon..");
      }
      if(!result){
        toast.error("Unable to fetch notes");
      }

      console.log("RESULT NOTES : ", result);
      setPapers(result);
      setLoading(false);

    }catch(err)
    {
      console.log("Error in fetching notes");
      toast.error("Unable to fetch Notes");
    }
  }

  const savePapers = (index) => {
    if(index < 0) 
    {
        console.log("Invalid index");
        return;
    }
    if(!token)
    {
      toast.error("Please Login to Save Papers");
      return;
    } 

    // creating our own object to store in cart.
    const paperToSave = {
      _id : papers[0].content[index]._id,
      type : papers[0].type,
      branch : papers[0].branch,
      examType : papers[0].examType,
      course : papers[0].course,
      sem : papers[0].sem,
      subject : papers[0].subject,
      content : {link: papers[0].content[index].link , year:papers[0].content[index].year},  
    }
    dispatch(addToCart(paperToSave));  
}

  useEffect(() => {
    getAllPapers();  
  },[])


  return (
    <>
    <div className='mt-16 w-full mx-auto relative flex flex-col justify-center items-center'>
      <div className='w-full  bg-tempSecondary flex flex-col justify-center items-center'>
        <div className='w-11/12 max-w-maxContent py-12 px-5 '>
          <h2>Ninjas Papers are ready. Get your papers & be more productive.</h2>
          <p>Free to access. Easy to use. Just ask and Ninja Notes can help with notes, papers, articles, and more.</p>
          <div>
            <h3>Subject: <HighlightText text={`${subject}`} />  </h3>
            <p>Exam Type: {examType}</p>
            <p>Branch: {branch}</p>
            <p>Semester: {sem}</p>
          </div>
        </div>
      </div>

      <div className='relative w-full flex flex-row flex-wrap gap-x-5 justify-center items-center  transition-all duration-300ms mt-8'>
      {
        !loading && papers?.length > 0 && (
          papers[0]?.content?.map((item, index) => (
            <div className='flex flex-col hover:scale-105 transition-all duration-200'>  
              <a href={item?.link} target='blank' onClick={() => setActive(true)} className='text-tempDark'>
                <div key={index} className='flex flex-col items-center bg-tempSecondary justify-between overflow-hidden rounded-b-none rounded-lg  gap-x-2 p-2 transition-all duration-200  '>
                  
                  <div className='flex flex-row w-full justify-start items-center gap-4'>
                    <img src={logoImg} width={25} />  
                    <p>{subject.length > 30 ? subject.substring(0,30)+"..." : subject}</p>  
                  </div>
                  <img  src={notesImg1} width={300}/>
                  <div className='w-full flex gap-2 justify-center items-center'>
                    <IoToday />
                    <p>{item?.year}</p>
                  </div>
                
                  
                </div>
              </a>
              <div onClick={() => savePapers(index)} className='mt-1 text-tempDark bg-tempPrimary p-2 rounded-t-none rounded-b-lg text-center mb-12 hover:border-b-2 border-b-tempDark'>
                <button className='font-bold text-lg text-tempDark cursor-pointer'>Save Paper to Profile</button>
              </div>
            </div>
        )))
      }
      </div> 
    

    {active && (<Testimonial setActive={setActive}/>)}
    </div> 

    </>
  )
}

export default PapersDetails
