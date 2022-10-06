import React from "react";

export default function OurServicesImg({ img }) {
  return (
    <div className="services-image-wrapper">
      <img src={img} alt={img} />
    </div>
  );
}
