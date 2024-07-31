import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Notes from './pages/Notes'
import Blogs from './pages/Blogs'
import Papers from './pages/Papers'
import JoinUs from './pages/JoinUs'
import Login from './pages/Login'

const App = () => {
  return (
    <div className="realtive w-screen min-h-screen font-inter flex flex-col gap-y-12 font-groastek">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/notes" element={<Notes/>} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/papers" element={<Papers/>} />
      <Route path="/joinus" element={<JoinUs/>} />
      <Route path="/login" element={<Login/>} />
      
    </Routes>
   </div>
  )
}

export default App