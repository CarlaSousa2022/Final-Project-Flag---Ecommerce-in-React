import React from "react";
import { NavLink } from "react-router-dom";
import "../css/ProductCard.css";

export function ProductCard({ product }) {
  return (
    <React.Fragment key={product.id}>
      <div className="wrapperProduct">
        <div className="item">
          <div className="content" key={product.id}>
            <img
              className="imgProduct"
              src={product.image}
              alt={product.title}
            />
            <h5 className="title">{product.title.substring(0, 12)}...</h5>
            <p>{product.price}</p>
            <NavLink to={`/productpage/${product.id}`}>More Details</NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductCard;
