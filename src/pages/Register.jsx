import React, { useState } from 'react'
import styles from "./register.module.css"
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  let[formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    phone:""
  });

  let handleChange=(e)=>{
    let{name,value}=e.target;
    setFormData({...formData,[name]:value})
  }

  let navigate=useNavigate()

  let handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Form Data Submitted",formData)
    axios.post("http://localhost:5000/users",formData).then(()=>{
      toast.success(`Registered Successfully as ${formData.name}`)
      setFormData({
        name:"",
        email:"",
        password:"",
        phone:""
      })
      navigate("/login")
    })
    .catch(()=>{
      toast.error("something is wrong!!!Try Again")
    })
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Register</h1>
       <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
