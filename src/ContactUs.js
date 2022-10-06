import React from "react";
import FirstCommonSection from "./components/FirstCommonSection";
import ContactForm from "./components/ContactForm";
import OtherEnquires from "./components/OtherEnquires";
import "./css/contact-us.css";

const data = {
  h1: "We Are Creative",
  h2: "an award-winning branding agency with a global outlook",
  p: " We are a brand development agency with a collective experience of more than 20 years. Our corporate office is in Ahmedabad, india, from where we also align with professionals located across the globe, to deliver 360 degree, end-to-end solutions.",
  img: ["./images/5.jpg", "./images/4.jpg", "./images/3.jpg", "./images/2.jpg"],
};
const otherEnquries = [
  {
    img: "./images/Start-Project.svg",
    heading: "Start A Project",
    content: "Let's start somethin great together.",
    path: "/",
  },
  {
    img: "./images/Start-Project.svg",
    heading: "Start A Project",
    content: "Let's start somethin great together.",
    path: "/",
  },
];

export default function ContactUs() {
  return (
    <>
      <FirstCommonSection data={data} />
      <ContactForm />

      <section class="project-and-team">
        <div class="container">
          <div class="row">
            {otherEnquries.map((elem, i) => (
              <OtherEnquires
                img={elem.img}
                heading={elem.heading}
                content={elem.content}
                path={elem.path}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
