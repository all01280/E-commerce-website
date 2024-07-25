import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Homeproduct from "./home_product";

/* Icon */
import { FaEye, FaHeart } from "react-icons/fa";

const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);
  // filter of trending product
  const filtercate = (x) => {
    const filterproduct = Homeproduct.filter((curElm) => {
      return curElm.type === x;
    });
    setTrendingProduct(filterproduct);
  };
  // All Trending Product
  const allTrendingProduct = () => {
    setTrendingProduct(Homeproduct);
  };

  return (
    <>
      <div className="home">
        <div className="top_banner">
          <div className="contact">
            <h3>silver aluminum</h3>
            <h2>Apple Watch</h2>
            <p>30% off at your first odder</p>
            <Link to="/shop" className="link">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="trending">
          <div className="container">
            <div className="left_box">
              <div className="header">
                <div className="heading">
                  <h2>trending product</h2>
                </div>
                <div className="cate">
                  <h3 onClick={() => allTrendingProduct()}>All</h3>
                  <h3 onClick={() => filtercate("new")}>New</h3>
                  <h3 onClick={() => filtercate("featured")}>Featured</h3>
                  <h3 onClick={() => filtercate("top")}>top selling</h3>
                </div>
              </div>
              <div className="products">
                <div className="container">
                  {trendingProduct.map((curElm) => {
                    return (
                      <>
                        <div className="box">
                          <div className="img_box">
                            <img src={curElm.image} alt="" />
                            <div className="icon">
                              <div className="icon_box">
                                <FaEye />
                              </div>
                              <div className="icon_box">
                                <FaHeart />
                              </div>
                            </div>
                          </div>
                          <div className="info">
                            <h3>{curElm.Name}</h3>
                            <p>${curElm.price}</p>
                            <button className="btn">Add to cart</button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="right_box"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
