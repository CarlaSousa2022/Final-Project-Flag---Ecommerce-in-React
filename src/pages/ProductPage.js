import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/ProductPage.css";
import Navbar from "../components/Navbar";

const ProductPage = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products/" + id);
      setProduct(await response.json());
    };
    getProduct();
  }, []);

  const ShowProduct = () => {
    return (
      <div className="row">
        <Navbar></Navbar>
        <div className="col-sm-6">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="col-sm-6">
          <p className="Title">{product.category}</p>
          <p className="Subtitle">{product.title}</p>
          <p className="Rating">
            Rating {product.rating && product.rating.rate}
          </p>
          <p className="Price"> $ {product.price}</p>
          <p className="Text">{product.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          <ShowProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
