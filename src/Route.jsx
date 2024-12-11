import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Login=lazy(()=>import("./pages/Login"))
const Register=lazy(()=>import("./pages/Register"))
const About=lazy(()=>import("./pages/About"))
const Home=lazy(()=>import("./pages/Home"))
const Layout=lazy(()=>import("./Layout"))
const PrivateRoute=lazy(()=>import("./components/PrivateRoute"))
const Profile=lazy(()=>import("./pages/Profile"))
const UpdateProfile=lazy(()=>import("./pages/UpdateProfile"))
const Admin=lazy(()=>import("./pages/Admin"))
const AdminUpdate=lazy(()=>import("./pages/AdminUpdate"))


// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Layout from "./Layout";
// import PrivateRoute from "./components/PrivateRoute";
// import Profile from "./pages/Profile";
// import UpdateProfile from "./pages/UpdateProfile";
// import Admin from "./pages/Admin";
// import AdminUpdate from "./pages/AdminUpdate";

export let myRoute=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/profile",
                element:<PrivateRoute><Profile/></PrivateRoute>
            },
            {
                path:"/updateprofile",
                element:<PrivateRoute><UpdateProfile/></PrivateRoute>
            },
            {
                path:"/admin",
                element:<PrivateRoute><Admin/></PrivateRoute>
            },
            {
                path:"/adminupdate/:id",
                element:<PrivateRoute><AdminUpdate/></PrivateRoute>
            }
        ]
    }
])


