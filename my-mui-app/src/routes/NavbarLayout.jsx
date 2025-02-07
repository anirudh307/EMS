import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import ImageGallery from "../componants/ImageGallery";
import '../App.css';
import Summery from "../componants/Summery";
import Cards_rept from "./Cards_rept";
import Footer from "../componants/Footer";
import InfoSection from "../componants/InfoSection";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../componants/About";
import Navbar from "../componants/Navbar";
import Home from "./Home";
import Admin from "../componants/Admin";
import User from "../componants/User";
import Feedback from "../componants/Feedback";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginAdmin from "../componants/admin Componants/LoginAdmin";


// This component manages the layout and conditionally hides the Navbar
function NavbarLayout() {
  const location = useLocation();

  // Define routes where the Navbar should be hidden
  const hideNavbarRoutes = ["/LoginAdmin", "/login-user/LoginUser"];

  return (
    <>
      {/* Show Navbar only if the route is NOT in the hideNavbarRoutes */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar /> }
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin-Login" element={<Admin />} />
        <Route path="/user-Login" element={<User />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
}

export default NavbarLayout;
