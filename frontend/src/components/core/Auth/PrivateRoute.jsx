import React from 'react'
import { useSelector } from 'react-redux'
import  { Navigate } from "react-router-dom"

function PrivateRoute({children}) {

    const {token} = useSelector((state)=> state.auth);

    if(token!==null) // token hai apke paas
        return children
    else return <Navigate to="/login" /> // token nahi hai to login page

}

export default PrivateRoute
