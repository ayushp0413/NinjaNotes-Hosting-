import React, { useEffect } from 'react'
import Aos from "aos";
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Notes from './pages/Notes'
import Blogs from './pages/Blogs'
import Papers from './pages/Papers'
import JoinUsForm from './components/core/Home/Join Us/JoinUsForm';
import Login from './pages/Login'
import Error from './pages/Error';
import Navbar from './components/common/Navbar';
import NotesDetails from './pages/NotesDetails';

const App = () => {

  useEffect(() => {
    Aos.init();
  }, []);


  return (
    <div className="realtive w-screen min-h-screen font-inter flex flex-col gap-y-12 font-groastek">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/notes" element={<Notes/>} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/papers" element={<Papers/>} />
      <Route path="/joinus" element={<JoinUsForm/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/notes/:course/:branch/:sem/:subject/:unit" element={<NotesDetails/>} />
      <Route path="*" element={<Error/>} />
      
    </Routes>
   </div>
  )
}

export default App