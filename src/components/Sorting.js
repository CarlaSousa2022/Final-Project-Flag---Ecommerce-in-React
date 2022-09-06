import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "../css/Sorting.css";

export const ShowProducts = ({ sortData, products }) => {
  const sortASC = () => sortData("asc");
  const sortDESC = () => sortData("desc");
  const sortPriceASC = () => sortData("price asc");
  const sortPriceDESC = () => sortData("price desc");
  const sortRatingASC = () => sortData("rating asc");
  const sortRatingDESC = () => sortData("rating desc");

  return (
    <div className="sortingDiv">
      <Dropdown>
        <Dropdown.Toggle variant="danger" id="dropdown-button">
          Sorting
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu">
          <Dropdown.Item onClick={sortASC}>Name Asc</Dropdown.Item>
          <Dropdown.Item onClick={sortDESC}>Name Desc</Dropdown.Item>
          <Dropdown.Item onClick={sortPriceASC}>Price Asc</Dropdown.Item>
          <Dropdown.Item onClick={sortPriceDESC}>Price Desc</Dropdown.Item>
          <Dropdown.Item onClick={sortRatingASC}>Rating Asc</Dropdown.Item>
          <Dropdown.Item onClick={sortRatingDESC}>Rating Desc</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default ShowProducts;
