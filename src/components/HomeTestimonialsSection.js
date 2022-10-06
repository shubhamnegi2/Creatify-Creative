import React from "react";
import OwlCarousel from "react-owl-carousel";
import "../../node_modules/owl.carousel/dist/assets/owl.carousel.css";
import "../../node_modules/owl.carousel/dist/assets/owl.theme.default.css";
import SectionHeading from "./SectionHeading";
import TestimonialSlider from "./TestimonialSlider";
const data = [
  {
    img: "./images/nitin.jpg",
    name: "Sumit Thapliyal",
    designation: " Sr. Marketing Manager, Creatify Creative",
    comment:
      "“The only word that comes to my mind while describing Creatify Creative design is - BREATHTAKING!!! Their team has come up with some absolutely brilliant design solutions for us!”",
  },
  {
    img: "./images/nitin.jpg",
    name: "Sumit Thapliyal",
    designation: " Sr. Marketing Manager, Creatify Creative",
    comment:
      "“The only word that comes to my mind while describing Creatify Creative design is - BREATHTAKING!!! Their team has come up with some absolutely brilliant design solutions for us!”",
  },
  {
    img: "./images/nitin.jpg",
    name: "Sumit Thapliyal",
    designation: " Sr. Marketing Manager, Creatify Creative",
    comment:
      "“The only word that comes to my mind while describing Creatify Creative design is - BREATHTAKING!!! Their team has come up with some absolutely brilliant design solutions for us!”",
  },
  {
    img: "./images/nitin.jpg",
    name: "Sumit Thapliyal",
    designation: " Sr. Marketing Manager, Creatify Creative",
    comment:
      "“The only word that comes to my mind while describing Creatify Creative design is - BREATHTAKING!!! Their team has come up with some absolutely brilliant design solutions for us!”",
  },
];
export default function HomeTestimonialsSection() {
  return (
    <>
      <section className="testimonials">
        <div className="container">
          <SectionHeading text={"What our clients say"} />
          <OwlCarousel
            items={1}
            loop={true}
            autoplay={true}
            autoplayTimeout={4500}
            smartSpeed={2000}
            className="testimonials-slider owl-theme"
            autoplayHoverPause={true}
          >
            {data.map((elem, index) => (
              <TestimonialSlider key={index} data={elem}/>
            ))}
          </OwlCarousel>
          <div className="owl-carousel testimonials-slider owl-theme">
            <div className="client item">
              <div className="img-wrapper text-center">
                <img src="./images/nitin.jpg" alt="" />
              </div>
              <p className="name"></p>
              <p className="designation"></p>
              <p className="comment"></p>
            </div>
            <div className="client item">
              <div className="img-wrapper text-center">
                <img src="./images/nitin.jpg" alt="" />
              </div>
              <p className="name">Sumit Thapliyal</p>
              <p className="designation">
                Sr. Marketing Manager, Creatify Creative
              </p>
              <p className="comment">
                “The only word that comes to my mind while describing Creatify
                Creative design is - BREATHTAKING!!! Their team has come up with
                some absolutely brilliant design solutions for us!”
              </p>
            </div>
            <div className="client item">
              <div className="img-wrapper text-center">
                <img src="./images/nitin.jpg" alt="" />
              </div>
              <p className="name">Sumit Thapliyal</p>
              <p className="designation">
                Sr. Marketing Manager, Creatify Creative
              </p>
              <p className="comment">
                “The only word that comes to my mind while describing Creatify
                Creative design is - BREATHTAKING!!! Their team has come up with
                some absolutely brilliant design solutions for us!”
              </p>
            </div>
            <div className="client item">
              <div className="img-wrapper text-center">
                <img src="./images/nitin.jpg" alt="" />
              </div>
              <p className="name">Sumit Thapliyal</p>
              <p className="designation">
                Sr. Marketing Manager, Creatify Creative
              </p>
              <p className="comment">
                “The only word that comes to my mind while describing Creatify
                Creative design is - BREATHTAKING!!! Their team has come up with
                some absolutely brilliant design solutions for us!”
              </p>
            </div>
            <div className="client item">
              <div className="img-wrapper text-center">
                <img src="./images/nitin.jpg" alt="" />
              </div>
              <p className="name">Sumit Thapliyal</p>
              <p className="designation">
                Sr. Marketing Manager, Creatify Creative
              </p>
              <p className="comment">
                “The only word that comes to my mind while describing Creatify
                Creative design is - BREATHTAKING!!! Their team has come up with
                some absolutely brilliant design solutions for us!”
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
