import React from "react";
import "../css/Categories.css";

export const Categories = ({ setFilter, filterProduct }) => {
  return (
    <div>
      <button className="btnCategories slide_right" onClick={setFilter}>
        All
      </button>
      <button
        className="btnCategories slide_right"
        onClick={() => filterProduct("men's clothing")}
      >
        Men´s Clothing
      </button>
      <button
        className="btnCategories slide_right"
        onClick={() => filterProduct("women's clothing")}
      >
        Women´s Clothing
      </button>
      <button
        className="btnCategories slide_right"
        onClick={() => filterProduct("jewelery")}
      >
        Jewelery
      </button>
      <button
        className="btnCategories slide_right"
        onClick={() => filterProduct("electronics")}
      >
        Electronics
      </button>
    </div>
  );
};
export default Categories;
