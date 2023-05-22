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
      <div style={{ fontSize: "large" }}>
        <img src={src} alt='not found'/>
        <h4>title : {title} </h4>

      </div>
      <div>
        Price: {price} 
      </div>
    </li>
  );
}
