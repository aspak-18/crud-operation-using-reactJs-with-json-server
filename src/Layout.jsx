import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Suspense fallback={<h1>Loading...........</h1>}>
        <Outlet /> {/* to render children in UI*/}
      </Suspense>
    </div>
  );
};

export default Layout;
