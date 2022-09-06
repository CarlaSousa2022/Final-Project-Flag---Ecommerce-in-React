import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowProducts from "../components/ShowProducts";
import Categories from "../components/Categories";
import Sorting from "../components/Sorting";
import Pagination from "../components/Pagination";
import Header from "../components/Header";

const ProductsList = () => {
  const originalData = useRef({});
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = await response.json();
      originalData.current = json;
      setData(json);
    };
    getProducts();
  }, []);

  const filterProduct = (cat) => {
    setCurrentPage(1);
    const updatedList = originalData.current.filter((x) => x.category === cat);
    setData(updatedList);
  };

  const sortData = (orientation) => {
    switch (orientation) {
      case "asc":
        const dataOrderAsc = data.sort((a, b) => (a.title > b.title ? 1 : -1));
        setData([...dataOrderAsc]);
        break;
      case "desc":
        const dataOrderDesc = data.sort((a, b) => (a.title > b.title ? -1 : 1));
        setData([...dataOrderDesc]);
        break;
      case "price asc":
        const dataPriceAsc = data.sort((a, b) => (a.price > b.price ? 1 : -1));
        setData([...dataPriceAsc]);
        break;
      case "price desc":
        const dataPriceDesc = data.sort((a, b) => (a.price > b.price ? -1 : 1));
        setData([...dataPriceDesc]);
        break;
      case "rating asc":
        const dataRatingAsc = data.sort((a, b) =>
          a.rating.rate > b.rating.rate ? 1 : -1
        );
        setData([...dataRatingAsc]);
        break;
      case "rating desc":
        const dataRatingDesc = data.sort((a, b) =>
          a.rating.rate > b.rating.rate ? -1 : 1
        );
        setData([...dataRatingDesc]);
        break;
      default:
        return;
    }
  };

  // Get current page:

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = data.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page:
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flexbox">
      <div className="header">
        <Header></Header>
      </div>
      <div className="subHeader">
        <div className="sortingDiv"></div>
      </div>
      <div className="row">
        <div className="column side">
          <div className="categoriesDiv">
            <Categories
              sortData={sortData}
              setFilter={() => setData(originalData.current)}
              filterProduct={filterProduct}
            />
          </div>
        </div>
        <div id="home" className="column middle">
          <ShowProducts
            sortData={sortData}
            setFilter={() => setData(originalData.current)}
            filterProduct={filterProduct}
            products={currentProduct}
          />
        </div>
        <div className="column right">
          <Sorting sortData={sortData} products={currentProduct} />
        </div>
      </div>
      <div className="paginationDiv">
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={data.length}
          paginate={paginate}
        />
      </div>
      <div className="footer">
        <p>Copyright © 2022 - All rights reserved - Powered by Carla Sousa </p>
      </div>
    </div>
  );
};

export default ProductsList;
