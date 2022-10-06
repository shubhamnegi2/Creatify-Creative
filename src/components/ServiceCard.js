import React from "react";

export default function ServiceCard({ image, heading, services }) {
  return (
    <div className="col-lg-3">
      <div className="service-card">
        <img src={image} alt={heading} />
        <h3>{heading}</h3>
        <ul>
          {services.map((elem, index) => (
            <li key={index}>
              <a href="">{elem}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
