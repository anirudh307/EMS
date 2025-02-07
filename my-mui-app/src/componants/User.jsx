import React from "react";
import { CssBaseline } from "@mui/material";
import UserLogin from "./UserLogin";
import Heading from "./Heading";

function User({setShowNavbar}) {
  return (
    <>
    <Heading/>
      <CssBaseline />
      <UserLogin setShowNavbar={setShowNavbar}/>
    </>
  );
}

export default User;