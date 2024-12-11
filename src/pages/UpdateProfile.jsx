import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from "./register.module.css"
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const UpdateProfile = () => {

    let userID=localStorage.getItem("userID")

    let[userDetails, setUserDetails]=useState(null);

    let navigate=useNavigate()

    useEffect(()=>{
        async function fetchUserDetails() {
            let {data} =await axios.get(`http://localhost:5000/users/${userID}`)
            setUserDetails(data)
            
        }
        fetchUserDetails()
    },[])

    let handleChange=(e)=>{
        let {name,value}=e.target
        setUserDetails({...userDetails,[name]:value})
    }

    let handleSubmit=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:5000/users/${userID}`,userDetails).then(()=>{
            console.log("Details Updated",userDetails)
            toast.success("Updated Successfully")
            navigate("/profile")
        }).catch(()=>{
            toast.error("unable to update")
        })
    }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Update</h1>
       <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={styles.input}
          value={userDetails?.name}
          readOnly
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.input}
          value={userDetails?.email}
          required
          readOnly
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userDetails?.password}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={userDetails?.phone}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          Update
        </button>
      </form>
    </div>
  )
}

export default UpdateProfile
