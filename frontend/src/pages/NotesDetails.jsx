import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { getNotesForSubjects } from '../services/operations/getNotesForSubjects';
import { useParams } from 'react-router';

const NotesDetails = () => {

  const [notes, setNotes] = useState(null);
  const [loading, setLoading] = useState(false);
  const {course, branch, sem, subject, unit } = useParams();  

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

  useEffect(() => {
    getAllNotes(); // we will call 
  },[])


  return (
    <div className='mt-40 w-11/12 max-w-maxContent mx-auto flex justify-center items-center'>
    {
      !loading && notes?.length > 0 && (
       notes?.map((item, index) => (
        <div className='border-2 border-tempPrimary inline-block p-6 rounded  ' key={index}>
          <p className='para '>Course : {item?.course}</p>
          <p className='para'>Branch : {item?.branch}</p>
          <p className='para'>Semester : {item?.sem}</p>
          <p className='para '>Subject : {item?.subject}</p>
          <a target='_blank' href={item?.content} onClick={expandHandler}><h5 className='para bg-tempSecondary text-center py-2 rounded-md '>Click to get your notes</h5></a>
        </div>
       ))
      )
    }
    </div>
  )
}

export default NotesDetails
