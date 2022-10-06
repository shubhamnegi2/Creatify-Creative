import React from "react";

export default function ClientsSlider({img}) {
  return (
    <>
      <div className="item">
        <div className="brand-logo">
          <img src={img} alt="brand" />
        </div>
      </div>
    </>
  );
}
