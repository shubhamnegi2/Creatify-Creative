import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./css/index.css";
import { wait } from "@testing-library/user-event/dist/utils";

import Item from "./components/Item";
import HomepageAboutSection from "./components/HomepageAboutSection";
import HomeServicesSection from "./components/HomeServicesSection";
import HomeLatestWorkSection from "./components/HomeLatestWorkSection";
import HomeTestimonialsSection from "./components/HomeTestimonialsSection";
import HomeClientsSection from "./components/HomeClientsSection";

export default function HomePage() {
  const [slider, setSlider] = useState();

  const sliderData = async () => {
    const data = await fetch("https://shubhamnegi2.github.io/technoedge/api2");
    const res = await data.json();
    setSlider(res);
  };

  useEffect(() => {
    sliderData();
  }, []);

  window.addEventListener("scroll", function () {
    let scroll = this.window.pageYOffset;
    let firstSectionWidth = document.querySelector(".home-slider").offsetHeight;    
    if (scroll > firstSectionWidth) {
      document.querySelector(".navigation-bar").style.backgroundColor="rgba(0,0,0,0.7)";
      document.querySelectorAll(".social-media-icons ul a").style.color="#000";      
    }else{
      document.querySelector(".navigation-bar").style.backgroundColor="transparent";
      document.querySelectorAll(".social-media-icons ul a").style.color="#fff";      
    }
    console.log('scroll = ',scroll)
    console.log('firstSectionWidth = ',firstSectionWidth)
  });

  console.log("slider");
  return (
    <>
      {slider && (
        <OwlCarousel
          items={1}
          loop={true}
          autoplay={true}
          autoplayTimeout={3500}
          smartSpeed={2000}
          className="home-slider"
        >
          {slider.map((elem, index) => {
            return (
              <div className="item" key={index}>
                <Item data={elem} />
              </div>
            );
          })}
        </OwlCarousel>
      )}
      <HomepageAboutSection />
      <HomeServicesSection />
      <HomeLatestWorkSection />
      <HomeTestimonialsSection />
      <HomeClientsSection />
    </>
  );
}
