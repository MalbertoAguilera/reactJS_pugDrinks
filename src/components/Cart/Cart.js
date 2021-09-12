import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import "./Cart.scss";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clear, removeItem, totalOfCart, quantityOfCart } = useContext(CartContext);

  return (
    
    <div className="container-cart">
       {quantityOfCart() ? (
        <div className="container-cart">
          <Header clear={clear} />
          <Body cart={cart} removeItem={removeItem} />
          <Footer totalOfCart={totalOfCart} />
        </div>
      ) : (
        <div>
          NO HAY ITEMS
          <Link to="/">COMENZAR COMPRA</Link>
        </div>
      )}
    </div>
    
  );
};

export default Cart;
