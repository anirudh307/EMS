import React from "react";
import ImageGallery from "../componants/ImageGallery";
import Summery from "../componants/Summery";
import Cards_rept from "./Cards_rept";
import InfoSection from "../componants/InfoSection";

const Home = () => {
  return <>
    <ImageGallery />
    <Summery/>
   <Cards_rept/>
   <InfoSection></InfoSection>
  </>;
};

export default Home;
