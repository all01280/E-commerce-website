import React from "react";
import "./nav.css";
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const Nav = ({ search, setSearch, searchproduct }) => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  // 使用Offcanvas
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="header">
        <div className="top_header">
          <div className="icon">
            <MdLocalShipping />
          </div>
          <div className="info">
            <p style={{ margin: "0" }}>
              Free Shipping When Shopping upto $1000
            </p>
          </div>
        </div>
        <div className="mid_header">
          <div className="logo">
            <img src="image/logo.webp" alt="logo" />
          </div>
          <div className="search_box">
            <input
              type="text"
              value={search}
              placeholder="searh"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={searchproduct}>
              <AiOutlineSearch />
            </button>
          </div>

          {isAuthenticated ? (
            // if user is login = show Logout Button
            <div className="user">
              <div className="icon">
                <CiLogout />
              </div>
              <div className="btn">
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            // if user not login = show Login Button
            <div className="user">
              <div className="icon">
                <FiLogIn />
              </div>
              <div className="btn">
                <button onClick={() => loginWithRedirect()}>Login</button>
              </div>
            </div>
          )}
        </div>
        <div className="last_header">
          <div className="user_profile">
            {
              // User Profile Will Shown Here
              isAuthenticated && (
                <>
                  <img className="icon" src={user.picture} alt={user.name} />
                  <div className="info">
                    <h2>{user.name}</h2>
                    <p style={{ margin: "0rem" }}>{user.email}</p>
                  </div>
                </>
              )
            }
            <div className="menu_btn">
              <Button variant="dark" onClick={handleShow}>
                <div className="menu_btn_icon">
                  <AiOutlineMenu />
                </div>
              </Button>

              {/* Offcanvas */}
              <Offcanvas
                className="offcanvas-custom"
                style={{ width: "11rem" }}
                show={show}
                onHide={handleClose}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="offcanvas_menu">
                    <p>
                      <Link onClick={handleClose} to="/" className="link">
                        Home
                      </Link>
                    </p>
                    <p>
                      <Link onClick={handleClose} to="/shop" className="link">
                        Shop
                      </Link>
                    </p>
                    <p>
                      <Link onClick={handleClose} to="/cart" className="link">
                        Cart
                      </Link>
                    </p>
                    <p>
                      <Link
                        onClick={handleClose}
                        to="/contact"
                        className="link"
                      >
                        Contact
                      </Link>
                    </p>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>

          <div className="nav">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/cart" className="link">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="offer">
            <p style={{ margin: "0rem" }}>flat 10% over all iphone</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
