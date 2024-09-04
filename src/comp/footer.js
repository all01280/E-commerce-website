import React from "react";
import "./footer.css";
import {
  FaPiggyBank,
  FaShippingFast,
  FaHeadphonesAlt,
  FaWallet,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="right_box">
            <div className="bottom">
              <div className="box">
                <h3>Your Account</h3>
                <ul>
                  <li>About us</li>
                  <li>Account</li>
                  <li>Payment</li>
                  <li>sales</li>
                </ul>
              </div>
              <div className="box">
                <h3>Products</h3>
                <ul>
                  <li>Delivery</li>
                  <li>Track Order</li>
                  <li>New product</li>
                  <li>Old product</li>
                </ul>
              </div>
              <div className="box">
                <h3>Contact us</h3>
                <ul>
                  <li>4005, Silver Business PointIndia</li>
                  <li>+(852)2413 5612</li>
                  <li>info@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
