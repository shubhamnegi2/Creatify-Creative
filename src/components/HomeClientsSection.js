import React from "react";
import ClientsSlider from "./ClientsSlider";
import OwlCarousel from "react-owl-carousel";
import "../../node_modules/owl.carousel/dist/assets/owl.carousel.css";
import "../../node_modules/owl.carousel/dist/assets/owl.theme.default.css";

const data = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZFZyLRgciwhIvNy-eOBqWhzyVXgKHEIbeRCGxbo0AzfNpM9lv9Y6EoGRwED8MJjUKPS0&usqp=CAU",  
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1ItbLR9_1kVT-hdH_4HAcEb_E8eHVBAJWQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&usqp=CAU",
];
export default function HomeClientsSection() {
  return (
    <>
      <section className="our-clients">
        <div className="container">
          <div className="row">
            <OwlCarousel
              items={5}
              loop={true}
              autoplay={true}
              autoplayTimeout={4500}
              smartSpeed={2000}
              margin={30}
              className="our-clients-slider owl-theme"
              autoplayHoverPause={true}
            >
              {data.map((elem, index) => (
                <ClientsSlider key={index} img={elem} />
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
}
