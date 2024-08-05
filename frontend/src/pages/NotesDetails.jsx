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
    <div className='mt-28'>
    {
      !loading && notes?.length > 0 && (
       notes?.map((item, index) => (
        <div key={index}>
          <h1>Course : {item?.course}</h1>
          <h2>Branch : {item?.branch}</h2>
          <h3>Semester : {item?.sem}</h3>
          <h4>Subject : {item?.subject}</h4>
          <a href={item?.content}><h5>Click to get your notes</h5></a>
        </div>
       ))
      )
    }
    </div>
  )
}

export default NotesDetails
