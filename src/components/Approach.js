import React from "react";
import Approaches from "./Approaches";

const data = [
  {
    icon: "fa-brands fa-cc-discover",
    heading: "Discover",
    para: "Every project is unique, and so understanding everything about you makes it all the more important. We conduct design audits, competitive analysis, interviews, and user testing that gives us clarity on the business you want to create, the market you want to",
  },
  {
    icon: "fa-solid fa-crosshairs",
    heading: "Define",
    para: "Once we understand everything about you, we collectively define the project, establish timelines and chalk out goals, and determine metrics aimed for your success. We work to create an experiential journey for your users - and this can only be attained with your",
  },
  {
    icon: "fa-solid fa-object-group",
    heading: "Design",
    para: "It's time to create some magic. We believe in research and data-driven design. We believe in validation than assumption. We immerse ourselves in the problem you are trying to solve and gather insights to solve them through the power of design.",
  },
  {
    icon: "fa-brands fa-connectdevelop",
    heading: "Develop",
    para: " Great design is rendered meaningless without powerful development. We believe that the best interactive experience is a combination of smart design thinking and innovative use of technology.",
  },
];
export default function Approach() {
  return (
    <>
      <section className="approach">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-10">
              <div className="approach-heading">
                <h2>Our Approach</h2>
              </div>
            </div>
            <div className="col-10">
              <p className="about-approach">
                Whether it's building a brand from scratch, designing a
                campaign, or developing a website: Our approach emphasises
                clarity and exceptional aesthetic quality.
              </p>
            </div>
            {data.map((elem, i) => (
              <Approaches key={i} icon={elem.icon} heading={elem.heading} para={elem.para}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
