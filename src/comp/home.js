import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Homeproduct from "./home_product";
import { AiOutlineClose } from "react-icons/ai";

/* Icon */
import { FaEye, FaShoppingCart } from "react-icons/fa";

const Home = ({ addtocart }) => {
  // 顥示產品詳情
  // Toggle Product Detail
  const [showDetail, setShowDetail] = useState(false);

  // Detail Page Data
  const [detail, setDetail] = useState([]);

  // Showing Detail Box
  const detailpage = (product) => {
    const detaildata = [{ product }];
    const productdetail = detaildata[0]["product"];
    setDetail(productdetail);
    setShowDetail(true);
  };

  const closedetail = () => {
    setShowDetail(false);
  };

  // Product categary
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);

  // Trending Product
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

  //Product Type
  useEffect(() => {
    productcategory();
  }, []);
  const productcategory = () => {
    // New Product
    const newcategory = Homeproduct.filter((x) => {
      return x.type === "new";
    });
    setNewProduct(newcategory);

    //Featured Product
    const featuredProduct = Homeproduct.filter((x) => {
      return x.type === "featured";
    });
    setFeaturedProduct(featuredProduct);

    //Top Product
    const topProduct = Homeproduct.filter((x) => {
      return x.type === "top";
    });
    setTopProduct(topProduct);
  };

  return (
    <>
      {showDetail ? (
        <>
          <div className="product_detail_box">
            <div className="product_detail">
              <button className="close_btn" onClick={closedetail}>
                <AiOutlineClose />
              </button>
              <div className="container">
                <div className="img_box">
                  <img src={detail.image} alt="" />
                </div>
                <div className="info">
                  <h4># {detail.cat}</h4>
                  <h2>{detail.Name}</h2>
                  <p>{detail.description}</p>
                  <h3>${detail.price}</h3>
                  <button onClick={() => addtocart(detail)}>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

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
                  <h3 onClick={() => filtercate("top")}>top</h3>
                </div>
              </div>
              {/* Products */}
              <div className="products">
                <div className="container">
                  <div className="box_list">
                    {trendingProduct.map((curElm) => {
                      return (
                        <>
                          <div className="box">
                            <div className="img_box">
                              <img src={curElm.image} alt="" />
                              <div className="icon">
                                <div
                                  className="icon_box"
                                  onClick={() => detailpage(curElm)}
                                >
                                  <FaEye />
                                </div>
                                {/*                                 <div className="icon_box">
                                  <FaHeart />
                                </div> */}
                              </div>
                            </div>
                            <div className="info">
                              <h3>{curElm.Name}</h3>
                              <p>${curElm.price}</p>
                              <button
                                className="btn"
                                onClick={() => addtocart(curElm)}
                              >
                                Add
                              </button>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banners */}
        <div className="banners">
          <div className="container gx-0">
            <div className="right_box">
              <div className="top">
                <img src="image/Multi-Banner-3.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="product_type">
          <div className="container">
            <div className="box">
              <div className="header">
                <h2>New Product</h2>
              </div>
              {newProduct.map((curElm) => {
                return (
                  <>
                    <div className="productbox">
                      <div className="img-box">
                        <img src={curElm.image} alt="" />
                      </div>
                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>$ {curElm.price}</p>
                        <div className="icon">
                          <button onClick={() => detailpage(curElm)}>
                            <FaEye />
                          </button>
                          {/*                           <button>
                            <FaHeart />
                          </button> */}
                          <button onClick={() => addtocart(curElm)}>
                            <FaShoppingCart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="box">
              <div className="header">
                <h2>Featured Product</h2>
              </div>
              {featuredProduct.map((curElm) => {
                return (
                  <>
                    <div className="productbox">
                      <div className="img-box">
                        <img src={curElm.image} alt="" />
                      </div>
                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>$ {curElm.price}</p>
                        <div className="icon">
                          <button onClick={() => detailpage(curElm)}>
                            <FaEye />
                          </button>
                          {/*                           <button>
                            <FaHeart />
                          </button> */}
                          <button onClick={() => addtocart(curElm)}>
                            <FaShoppingCart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            <div className="box">
              <div className="header">
                <h2>Top Product</h2>
              </div>
              {topProduct.map((curElm) => {
                return (
                  <>
                    <div className="productbox">
                      <div className="img-box">
                        <img src={curElm.image} alt="" />
                      </div>
                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>$ {curElm.price}</p>
                        <div className="icon">
                          <button onClick={() => detailpage(curElm)}>
                            <FaEye />
                          </button>
                          {/*                           <button>
                            <FaHeart />
                          </button> */}
                          <button onClick={() => addtocart(curElm)}>
                            <FaShoppingCart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
