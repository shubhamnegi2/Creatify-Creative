import React from "react";
import FirstCommonSection from "./components/FirstCommonSection";
import OurServices from "./components/OurServices";
import "./css/services.css";

const data = {
  h1: "We Are Creative",
  h2: "an award-winning branding agency with a global outlook",
  p: " We are a brand development agency with a collective experience of more than 20 years. Our corporate office is in Ahmedabad, india, from where we also align with professionals located across the globe, to deliver 360 degree, end-to-end solutions.",
  img: ["./images/5.jpg", "./images/4.jpg", "./images/3.jpg", "./images/2.jpg"],
};

const ourServices = [
  {
    img: "images/Branding.svg",
    heading: " Branding,  Strategy & Identity",
    para: "At Zero Designs we are always keen to help our clients in strategies the brand presence and continuous improvement in all aspects of the business",
    className: "our-services1",
    services: [
      "Brand Strategy",
      "Naming Convention",
      "Logo Design",
      "Corporate Identity",
    ],
  },
  {
    img: "images/Branding.svg",
    heading: " Branding,  Strategy & Identity",
    para: "At Zero Designs we are always keen to help our clients in strategies the brand presence and continuous improvement in all aspects of the business",
    className: "our-services2",
    services: [
      "Brand Strategy",
      "Naming Convention",
      "Logo Design",
      "Corporate Identity",
    ],
  },
  {
    img: "images/Branding.svg",
    heading: " Branding,  Strategy & Identity",
    para: "At Zero Designs we are always keen to help our clients in strategies the brand presence and continuous improvement in all aspects of the business",
    className: "our-services3",
    services: [
      "Brand Strategy",
      "Naming Convention",
      "Logo Design",
      "Corporate Identity",
    ],
  },
  {
    img: "images/Branding.svg",
    heading: " Branding,  Strategy & Identity",
    para: "At Zero Designs we are always keen to help our clients in strategies the brand presence and continuous improvement in all aspects of the business",
    className: "our-services4",
    services: [
      "Brand Strategy",
      "Naming Convention",
      "Logo Design",
      "Corporate Identity",
    ],
  },
];

export default function Services() {
  return (
    <>
      <FirstCommonSection data={data} />

      <section className="our-services">
        <OurServices data={ourServices} />
      </section>
    </>
  );
}
