import "../css/Header.css";
import image from "../assets/headerImg.jpg";
import React, { Component } from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <section className="header-content">
        <img className="rocky-dashed animate-pop-in" src={image} />
        <h1 className="header-title animate-pop-in">Store Fashion Online</h1>
        <p className="header-button animate-pop-in">
          <button className="btnCategories slide_right">
            <Link to="home" spy={true} smooth={true}>
              Latest Products
            </Link>
          </button>
        </p>
      </section>
    </>
  );
};

export default Header;
