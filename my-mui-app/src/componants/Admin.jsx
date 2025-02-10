import React from "react";
import AdminLogin from "./AdminLogin";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
import Heading from "./Heading";

function Admin({setShowNavbar}) {
  const [showHeading, setShowHeading] = useState(true);
  return (
    <>
    {showHeading && <Heading />}
      <CssBaseline />
      <AdminLogin setShowNavbar={setShowNavbar} setShowHeading={setShowHeading}/>
    </>
  );
}

export default Admin;