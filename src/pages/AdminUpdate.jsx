import React, { useEffect, useState } from 'react'
import styles from "./register.module.css"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

const AdminUpdate = () => {

    let[updateUser,setUpdateUser]=useState(null)

    let navigate=useNavigate()

    let {id}=useParams()

    useEffect(()=>{
        async function fetchUpdateUser() {
            let {data}=await axios.get(`http://localhost:5000/users/${id}`)
            setUpdateUser(data)
        }
        fetchUpdateUser()
    },[])

    let handleChange=(e)=>{
        let{name,value}=e.target
        setUpdateUser({...updateUser,[name]:value})
    }

    let formSubmit=(e)=>{
        e.preventDefault();
        console.log(updateUser)
        axios.put(`http://localhost:5000/users/${id}`,updateUser).then(()=>{
            toast.success("User Updated")
            console.log("Data updated=========",updateUser)
            navigate("/admin")
        }).catch(()=>{
            toast.error("Unable to update")
        })
    }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Update User {updateUser?.name}</h1>
       <form className={styles.form} onSubmit={formSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={styles.input}
          onChange={handleChange}
          value={updateUser?.name}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.input}
          onChange={handleChange}
          value={updateUser?.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={updateUser?.password}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={updateUser?.phone}
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

export default AdminUpdate
