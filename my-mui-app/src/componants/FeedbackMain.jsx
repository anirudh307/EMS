import React from "react";
import Heading from "./Heading";
import Feedback from "./Feedback";

function FeedbackMain({setShowNavbar}) {
  return (
    <>
    <Heading/>
      <Feedback setShowNavbar={setShowNavbar}/>
    </>
  );
}

export default FeedbackMain;