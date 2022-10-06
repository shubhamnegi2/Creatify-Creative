import React from "react";
import SectionHeading from "./SectionHeading";
import OurWorkImages from "./OurWorkImages";
import "../css/HomeLatestWorkSection.css";
const data = [
  { className: "image img1", img: "./images/1.jpg" },
  { className: "image img2", img: "./images/2.jpg" },
  { className: "image img3", img: "./images/3.jpg" },
  { className: "image img4", img: "./images/4.jpg" },
  { className: "image img5", img: "./images/5.jpg" },
  { className: "image img6", img: "./images/6.jpg" },
  { className: "image img7", img: "./images/7.jpg" },
  { className: "image img8", img: "./images/1.jpg" },
];

export default function HomeLatestWorkSection() {
  return (
    <>
      <section className="our-work">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-10">
              <SectionHeading text={"our latest work"} />
            </div>
          </div>
          <div className="all-images-wrapper">
            <div className="image-container">
              <div className="row">
                {data.map((elem, index) => (
                  <OurWorkImages key={index} className={elem.className} img={elem.img} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
