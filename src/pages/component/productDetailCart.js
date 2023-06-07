import React from "react";
// import { Link } from "react-router-dom";

export function ProductDetailCard({
  id,
  title,
  price,
  src,
  description,
  
}) {
  return (
    <li
      style={{
        padding: "1rem",
        listStyle: "none",
        margin: "1rem",
        border: "1px solid #efefef"
      }}
    >
      <div className="productDetail" style={{ fontSize: "large" }}>
        <img className="productDetail-image" src={src} alt='not found'/>
        <h4>title : {title} </h4>
        Price: {price}/-Rs. 
      </div>
      <div>
       
      </div>
    </li>
  );
}
