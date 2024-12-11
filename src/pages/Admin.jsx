import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./admin.module.css"
import toast from 'react-hot-toast'

const Admin = () => {

    let[allUser,setAllUser]=useState(null)
    let [toogle, setToggle] = useState(false);

    useEffect(()=>{
        async function fetchAllUser() {
            let {data}=await axios.get(`http://localhost:5000/users`)
            setAllUser(data)
        }
        fetchAllUser()
    },[toogle])

    let deleteHandle=(id)=>{
        let confirmVal=confirm("Are you sure")
        if(confirmVal){
            axios.delete(`http://localhost:5000/users/${id}`).then(()=>{
                console.log("Data deleted",allUser)
                toast.success("User Deleted")
                setToggle(!toogle)
            }).catch(()=>{
                toast.error("Unable to delete")
            })
        }
    }

  return (
    <div className={style.mainContainer}>
        <div className={style.admin_panel}>
      <h1>User's Details</h1>
      <article className={style.user_container}>
        {allUser?.map(({ id, name, email, password, phone }) => {
          if (email !== "admin@gmail.com") {
            return (
                <section className={style.user_box} key={id}>
                <h2>Name: {name}</h2>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Phone: {phone}</p>
                <div className={style.action_buttons}>
                  <button>
                    <Link to={`/adminupdate/${id}`}>Update</Link>
                  </button>
                  <button onClick={()=>deleteHandle(id)}>Delete</button>
                </div>
              </section>
            );
          }
        })}
      </article>
    </div>
    </div>
  )
}

export default Admin
