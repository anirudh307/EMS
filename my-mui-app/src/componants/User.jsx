import React from "react";
import { CssBaseline } from "@mui/material";
import UserLogin from "./UserLogin";
import Heading from "./Heading";
import { useState } from "react";

function User({setShowNavbar}) {
  const [showHeading, setShowHeading] = useState(true);
  return (
    <>
   {showHeading && <Heading />}
      <CssBaseline />
      <UserLogin setShowNavbar={setShowNavbar} setShowHeading={setShowHeading}/>
    </>
  );
}

export default User;