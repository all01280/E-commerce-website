import React, { useState } from "react";
import "./shop.css";
import { FaEye, FaFilter } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const Shop = ({ shop, Filter, allcatefilter, addtocart }) => {
  // Offcanvas
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

      <div className="shop">
        <p>Home . Shop</p>
        <div className="container">
          <div className="left_box">
            <div className="banner">
              <div className="img_box">
                <img src="image/shop_top.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="right_box">
            <div className="category">
              <div className="header">
                <h3>categories</h3>
              </div>
              <div className="box">
                <p onClick={() => allcatefilter()}># All</p>
                <p onClick={() => Filter("tv")}># tv</p>
                <p onClick={() => Filter("laptop")}># laptop</p>
                <p onClick={() => Filter("watch")}># watch</p>
                <p onClick={() => Filter("speaker")}># speaker</p>
                <p onClick={() => Filter("electronics")}># electronics</p>
                <p onClick={() => Filter("headphone")}># headphone</p>
                <p onClick={() => Filter("phone")}># phone</p>
              </div>
            </div>
            <div className="product_box">
              <h2>Shop Product</h2>
              <div className="icon_filter" onClick={handleShow}>
                <FaFilter />
              </div>

              {/* Offcanvas */}
              <Offcanvas
                show={show}
                onHide={handleClose}
                placement="bottom"
                style={{ height: "30rem" }}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Categories</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <ul className="offcanvas_Catbox">
                    <li
                      onClick={() => {
                        allcatefilter();
                        handleClose();
                      }}
                    >
                      All
                    </li>
                    <li
                      onClick={() => {
                        Filter("tv");
                        handleClose();
                      }}
                    >
                      tv
                    </li>
                    <li
                      onClick={() => {
                        Filter("laptop");
                        handleClose();
                      }}
                    >
                      laptop
                    </li>
                    <li
                      onClick={() => {
                        Filter("watch");
                        handleClose();
                      }}
                    >
                      watch
                    </li>
                    <li
                      onClick={() => {
                        Filter("speaker");
                        handleClose();
                      }}
                    >
                      speaker
                    </li>
                    <li
                      onClick={() => {
                        Filter("electronics");
                        handleClose();
                      }}
                    >
                      electronics
                    </li>
                    <li
                      onClick={() => {
                        Filter("headphone");
                        handleClose();
                      }}
                    >
                      headphone
                    </li>
                    <li
                      onClick={() => {
                        Filter("phone");
                        handleClose();
                      }}
                    >
                      phone
                    </li>
                  </ul>
                </Offcanvas.Body>
              </Offcanvas>

              <div className="products">
                <div className="container">
                  <div className="box_list">
                    {shop.map((curElm) => {
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
      </div>
    </>
  );
};

export default Shop;
