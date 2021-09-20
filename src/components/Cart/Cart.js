import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import "./Cart.scss";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import { Link } from "react-router-dom";
import emptyCart from "../../assets/img/emptyCart.png"

const Cart = () => {
  const { quantityOfCart } = useContext(CartContext);

  return (
    <div className="container-cart container">
      {quantityOfCart() ? (
        <div>
          <Header />
          <Body />
          <Footer />
        </div>
      ) : (
        <div className="container-empty">
          <img className="cart-image"alt="emptyCart" src={emptyCart}/>
          <p className="cart-text">CARRITO VACIO</p>
          <div><Link className="cart-link btn" to="/">COMENZAR COMPRA</Link></div>
        </div>
      )}
    </div>
  );
};

export default Cart;
