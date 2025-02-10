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
import Feedback from "../componants/Feedback";
import "bootstrap/dist/css/bootstrap.min.css";
import FeedbackMain from "../componants/FeedbackMain";


function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  

  return <>
  <Router>
  {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About setShowNavbar={setShowNavbar}/>} />
        <Route path="/admin-Login" element={<Admin setShowNavbar={setShowNavbar}/>} />
        <Route path="/user-Login" element={<User setShowNavbar={setShowNavbar}/>} />
        <Route path="/feedback" element={<FeedbackMain setShowNavbar={setShowNavbar}/>} />
      </Routes>
           <Footer/>
     </Router>
  
  </>
}

export default App;
