import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Cart = ({ cart, setCart }) => {
  // Increase Quantiyy of cart product
  const incqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty + 1 }
          : curElm;
      })
    );
  };

  // decrese Quantiyy of cart product
  const decqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty - 1 }
          : curElm;
      })
    );
  };

  //Removing cart product
  const removeproduct = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist.qty > 0) {
      setCart(
        cart.filter((curElm) => {
          return curElm.id !== product.id;
        })
      );
    }
  };
  // Total Price
  const total = cart.reduce((price, item) => price + item.qty * item.price, 0);

  return (
    <>
      <div className="cart-title">Home . Cart</div>
      <div className="cart">
        {cart.length === 0 && (
          <>
            <div className="empty_cart">
              <h2>Your Shopping cart is empty</h2>
              <Link to="/shop">
                <button>Shop</button>
              </Link>
            </div>
          </>
        )}
        <div className="container">
          {cart.map((curElm) => {
            return (
              <>
                <div className="box">
                  <div className="img_box">
                    <img src={curElm.image} alt="" />
                  </div>
                  <div className="detail">
                    <div className="info">
                      <h4>{curElm.cat}</h4>
                      <h3>{curElm.Name}</h3>
                      <p>${curElm.price * curElm.qty}</p>
                    </div>

                    <div className="quantity">
                      <button onClick={() => incqty(curElm)}>+</button>
                      <input type="number" value={curElm.qty} />
                      <button onClick={() => decqty(curElm)}>-</button>
                    </div>
                    <div className="icon">
                      <li onClick={() => removeproduct(curElm)}>
                        <AiOutlineClose />
                      </li>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="bottom">
          {cart.length > 0 && (
            <>
              <div className="Total">Total: ${total}</div>
              <button>Check Out</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
