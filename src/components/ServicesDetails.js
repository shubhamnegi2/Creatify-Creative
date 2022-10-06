import React from "react";
import { NavLink } from "react-router-dom";

export default function ServicesDetails({ data }) {
  const details = [data];
  console.log(details);
  return (
    <>
      {details.map((elem, i) => (
        <div key={i} className="services">
          <h2>{elem.heading}</h2>
          <p>{elem.para}</p>
          <ul>
            {elem.services.map((service, index) => (
              <li key={index + Math.random()}>
                <NavLink to="/">
                  <i className="fa-solid fa-bullseye"></i>
                  {service}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
