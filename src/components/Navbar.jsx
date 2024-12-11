import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./navbar.module.css";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  let userID = localStorage.getItem("userID");

  let navigate = useNavigate();

  let logout = () => {
    localStorage.removeItem("userID");
    navigate("/login");
  };

  let deleteProfile = () => {
    let confirmVal = confirm("Are you sure you want to delete");
    console.log(confirmVal);

    if (confirmVal) {
      axios.delete(`http://localhost:5000/users/${userID}`).then(() => {
        toast.success("Deleted Successfully");
        localStorage.removeItem("userID");
        navigate("/register");
      });
    } else {
      toast.error("Something went wrong!!!");
    }
  };

  return (
    <nav>
      <aside className={style.logo}></aside>
      <ul className={style.menu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {userID ? (
          <>
            <li className={style.dropdownContainer}>
              <Link to="/profile">profile</Link>
              <div className={style.dropdownMenu}>
                <li className={style.dropdownItem}>
                  <Link to="/updateprofile">Update</Link>
                </li>
                <li className={style.dropdownItem} onClick={deleteProfile}>
                  Delete
                </li>
                <li onClick={logout} className={style.dropdownItem}>
                  logout
                </li>
              </div>
            </li>
            <li onClick={logout} className={style.logout}>
              logout
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/register">register</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
