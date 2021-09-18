import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import "./Cart.scss";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import { Link } from "react-router-dom";

const Cart = () => {
  const { quantityOfCart } = useContext(CartContext);

  return (
    <div className="container-cart">
      {quantityOfCart() ? (
        <div className="container-cart">
          <Header />
          <Body />
          <Footer />
        </div>
      ) : (
        <div style={{
          fontSize: '50px'
        }}>
          <Link to="/">COMENZAR COMPRA</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
