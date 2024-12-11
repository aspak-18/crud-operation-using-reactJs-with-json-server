import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    let userID=localStorage.getItem("userID")
  return userID? children: <Navigate to="/login"/>
}

export default PrivateRoute
