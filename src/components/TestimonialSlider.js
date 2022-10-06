import React from "react";

export default function TestimonialSlider({ data }) {
  const { img, name, designation, comment } = data;
  return (
    <>
      <div className="client item">
        <div className="img-wrapper text-center">
          <img src={img} alt={img} />
        </div>
        <p className="name">{name}</p>
        <p className="designation">{designation}</p>
        <p className="comment">{comment}</p>
      </div>
    </>
  );
}
