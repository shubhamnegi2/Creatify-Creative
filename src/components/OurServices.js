import React from "react";
import OurServicesImg from "./OurServicesImg";
import ServicesDetails from "./ServicesDetails";

export default function OurServices({ data }) {
  return (
    <>
      {data.map((elem, index) => (
        <div key={index} className={elem.className}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                {+index % 2 === 0 ? (
                  <OurServicesImg img={elem.img} />
                ) : (
                  <ServicesDetails data={elem} />
                )}
              </div>
              <div className="col-lg-6">
                {+index % 2 !== 0 ? (
                  <OurServicesImg img={elem.img} />
                ) : (
                  <ServicesDetails data={elem} />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
