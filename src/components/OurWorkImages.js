import React from "react";

export default function OurWorkImages({className,img}) {
  return (
    <>
      <div className="col-lg-3 mt-4">
        <div className={className}>
          <img src={img} alt={img} />
          <img src={img} alt={img} />
        </div>
      </div>
    </>
  );
}
