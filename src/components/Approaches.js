import React from "react";

export default function Approaches({icon,heading,para}) {
  return (
    <>
      <div className="col-md-6 mt-5">
        <div className="approaches">
          <div className="icon">
            <i className={icon}></i>
          </div>
          <div className="content">
            <h3>{heading}</h3>
            <p>{para}</p>
          </div>
        </div>
      </div>
    </>
  );
}
