import { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import ImageGallery from "../componants/ImageGallery";
import '../App.css';
import Summery from "../componants/Summery";
import Cards_rept from "./Cards_rept";
import Footer from "../componants/Footer";
import InfoSection from "../componants/InfoSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../componants/About";
import Navbar from "../componants/Navbar";
import Home from "./Home";
import Admin from "../componants/Admin";
import User from "../componants/User";


function App() {
  return <>
  <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin-Login" element={<Admin />} />
        <Route path="/user-Login" element={<User />} />
      </Routes>
           <Footer/>
     </Router>
  
  </>
}

export default App;
