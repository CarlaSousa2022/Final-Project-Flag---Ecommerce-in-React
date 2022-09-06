import React from "react";
import ProductCard from "./ProductCard";

export const ShowProducts = ({ sortData, products }) => {
  const sortASC = () => sortData("asc");
  const sortDESC = () => sortData("desc");
  const sortPriceASC = () => sortData("price asc");
  const sortPriceDESC = () => sortData("price desc");
  const sortRatingASC = () => sortData("rating asc");
  const sortRatingDESC = () => sortData("rating desc");

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default ShowProducts;
