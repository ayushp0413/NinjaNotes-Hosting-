import React, { useEffect, useState } from 'react'
import { getAllJoinUs } from '../services/operations/joinusAPI';

const NotesDetails = () => {

  const [notes, setNotes] = useState(null);

  const getAll = async() => {
    try
    {
      console.log("API is calling....");
      const data = await getAllJoinUs();
      console.log("API fetched data....", data);
      setNotes(data);

    }catch(err)
    {
      console.log("Mflvfdl");
    }
  }

  useEffect(() => {
    getAll(); // we will call 
  },[])


  return (
    <div className='mt-28'>
    {
      notes?.length > 0 && (
       notes?.map((item) => (
        <div>
          <a href={item?.github}><h1>Click to get notes</h1></a>
        </div>
       ))
      )
    }
    </div>
  )
}

export default NotesDetails
