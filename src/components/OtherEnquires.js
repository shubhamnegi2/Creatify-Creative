import React from "react";
import { NavLink } from "react-router-dom";

export default function OtherEnquires({img,heading,content,path}) {
  return (
    <>
      <div className="col-lg-6">
        <div className="project">
          <div className="img-wrapper">
            <img src={img} alt={heading} />
          </div>
          <div>
            <h2>{heading}</h2>
            <p>
              {content}
            </p>
            <NavLink to={path}>PROJECT INQUIRY</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
