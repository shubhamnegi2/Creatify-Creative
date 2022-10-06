import React,{ useState,useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function HomepageAboutSection() {
    const [mousex,setMouseX] = useState();
    const [mousey,setMouseY] = useState();

  useEffect(() => {
    let box = document.querySelector('#index-about-section');
    box.addEventListener("mousemove", (evt) => {
        // let offsetWidth = box.offsetWidth;
        // let offsetHeight = box.offsetHeight;
        let mouseX = evt.pageX - box.offsetLeft;
        let mouseY = evt.pageY - box.offsetTop;
        document.querySelector('.heart-img').style.right = (mouseX);
        document.querySelector('.heart-img').style.top = (mouseY);   
        setMouseX(mouseX)
        setMouseY(mouseY)
      });
  },[mousex],[mousey]);



   return (
    <>
      <section className="about-us" id="index-about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="heading">
                <h2>About us</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="about-content">
                <h2>we are zero without you!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                  sint dolores explicabo, impedit libero fuga optio error
                  corporis. Tempora eius, vitae quasi iste minus magnam nemo
                  officiis repudiandae accusamus culpa.
                </p>
                <NavLink to="/about-us">find out more</NavLink>
                <img style={{right:`${(mousex * 10 )/100}px`, top : `${(mousey * -10 )/100 + 10}px`}}
                  src="./images/heart-img.webp"
                  alt="heart-img"
                  className="heart-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
