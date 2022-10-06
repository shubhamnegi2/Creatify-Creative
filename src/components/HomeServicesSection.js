import React from "react";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

const data = [
  {
    image: "./images/services1.jpg",
    heading: "Branding, Strategy & Identity",
    services: [
      "brand strategy",
      "brand naming",
      "logo design",
      "Corporate identity",
    ],
  },
  {
    image: "./images/services1.jpg",
    heading: "Visual Communication & Design",
    services: [
      "Graphic Design",
      "Photography",
      "3D Visualization",
      "Packaging Design",
    ],
  },
  {
    image: "./images/services1.jpg",
    heading: "Web Design & Development",
    services: [
      "Web Design",
      "UX Design",
      "Web Development ",
      "eCommerce Solution",
      "Mobile App Design",
    ],
  },
  {
    image: "./images/services1.jpg",
    heading: "SEO & Digital Marketing",
    services: [
      "SEO",
      "Social Media Management",
      "SEM/PPC Management",
      "Email Campaign",
    ],
  },
];

export default function HomeServicesSection() {
  return (
    <>
      <section className="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHeading text={"our services"} />
              <p>Best-in-class services behind better customer experiences</p>
            </div>
          </div>
          <div className="row mt-3">
            {data.map((elem, index) => (
              <ServiceCard
                key={index}
                image={elem.image}
                heading={elem.heading}
                services={elem.services}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
