import React from "react";

export default function Item({data}) {
  return (
    <div className='slider' style={{backgroundImage:`url(${data.bgImg})`}}>
      <div className="container">
        <h1>
          <span>{data.text}</span>
        </h1>
      </div>
    </div>
  );
}
