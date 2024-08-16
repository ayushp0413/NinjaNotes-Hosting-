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
import SignUp from './pages/SignUp';
import OpenRoute from './components/core/Auth/OpenRoute';
import PrivateRoute from './components/core/Auth/PrivateRoute';
import ProfileDropdown from './pages/ProfileDropdown';
import Dashboard from './pages/Dashboard';
import MyProfile from './components/core/Dashboard/MyProfile';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import MySettings from './components/core/Dashboard/MySettings';
import MyNotes from './components/core/Dashboard/MyNotes';
import MyBlogs from './components/core/Dashboard/MyBlogs';


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

      <Route path="/login" element={<OpenRoute> <Login/> </OpenRoute>} />
      <Route path="/signup" element={<OpenRoute> <SignUp/> </OpenRoute>} />
      <Route path="/forgot-password" element={<OpenRoute> <ForgotPassword/> </OpenRoute>} />
      <Route path="/update-password/:token" element={<ResetPassword/>} />
      
      <Route path="/notes" element={<Notes/>} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/papers" element={<Papers/>} />
      <Route path="/joinus" element={<JoinUsForm/>} />
      <Route path="/notes/:course/:branch/:sem/:subject/:unit" element={<NotesDetails/>} />
      
      {/* This is only for that two dropdown buttons */}
      <Route path="/dashboard/my-profile" element={
                                       <OpenRoute>
                                        <ProfileDropdown/>  
                                       </OpenRoute> 
        } /> 

      {/* Dashboard Routes using outlet and nested Routes*/}
      <Route element={<PrivateRoute><Dashboard/></PrivateRoute>} >
        <Route path='/dashboard/myProfile'  element={<MyProfile/>} />
        <Route path='/dashboard/settings'  element={<MySettings/>} />
        <Route path='/dashboard/notes'  element={<MyNotes/>} />
        <Route path='/dashboard/blogs'  element={<MyBlogs/>} />
      </Route>
      
      
      
      
      <Route path="*" element={<Error/>} />
      
    </Routes>

   </div>
  )
}

export default App