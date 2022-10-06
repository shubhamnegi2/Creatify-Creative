import React from "react";
import { NavLink } from "react-router-dom";

export default function AllBlogs({img,content,heading,path}) {
  return (
    <>
      <div className="col-lg-4 mt-5">
        <div className="blog-card">
          <div className="image-wrapper">
            <img src={img} alt={heading} />
          </div>
          <div className="content">
            <h2>
              {heading}
            </h2>
            <p>
              {content}
            </p>
            <NavLink to={path}>continue reading...</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
