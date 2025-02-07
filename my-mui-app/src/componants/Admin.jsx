import React from "react";
import AdminLogin from "./AdminLogin";
import { CssBaseline } from "@mui/material";
import { useEffect } from "react";
import Heading from "./Heading";

function Admin({setShowNavbar}) {
  return (
    <>
    <Heading/>
      <CssBaseline />
      <AdminLogin setShowNavbar={setShowNavbar}/>
    </>
  );
}

export default Admin;