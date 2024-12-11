import React, { useEffect, useState } from 'react'
import styles from "./login.module.css"
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  let[loginData,setLoginData]=useState({
    email:"",
    password:""
  })

  let handleChange=(e)=>{
    let {name,value}=e.target
    setLoginData({...loginData,[name]:value})
  }

  let[allRegisteredUser,setRegisteredUser]=useState(null)

  useEffect(()=>{
    async function fetchAllUsers() {
      let{data}=await axios.get("http://localhost:5000/users")
      console.log(data)
      setRegisteredUser(data)
    }
    fetchAllUsers()
  },[])

  let navigate=useNavigate()

  let handleSubmit=(e)=>{
    e.preventDefault()
    let authUser=allRegisteredUser.find((user)=>{
      
      return(
        user.email===loginData.email && user.password === loginData.password
      )
    })
    console.log("==========")
    console.log(authUser)
    console.log(authUser.name)


    if(authUser.email==="admin@gmail.com" && authUser.password==="1234"){
      localStorage.setItem("userID",authUser.id)
      toast.success(`Welcome admin ${authUser.name}`) 
      navigate("/admin") 
    }
    else if(authUser){
      localStorage.setItem("userID",authUser.id)
      toast.success(`logged in succesfully ${authUser.name}`) 
      navigate("/profile") 
    }
    else{
      toast.error("Email or passwork not valid")
    }

  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login