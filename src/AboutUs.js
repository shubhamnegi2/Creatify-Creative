import React from "react";
import FirstCommonSection from "./components/FirstCommonSection";
import Approach from "./components/Approach";
import './css/about-us.css'

const data = {
    h1: "We Are Creative",
    h2: "an award-winning branding agency with a global outlook",
    p: " We are a brand development agency with a collective experience of more than 20 years. Our corporate office is in Ahmedabad, india, from where we also align with professionals located across the globe, to deliver 360 degree, end-to-end solutions.",
    img: ["./images/5.jpg", "./images/4.jpg", "./images/3.jpg", "./images/2.jpg"],
  };

export default function AboutUs() {
  document.querySelector(".navigation-bar").style.backgroundColor="rgba(0,0,0,0.7)";  
  return (
    <>
    <FirstCommonSection data={data}/>  
    <Approach/>  
    </>
  );
}
