import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./Footer.scss";

const Footer = () => {
  const { totalOfCart } = useContext(CartContext);

  return (
    <div className="cart-footer">
      <div className="cart-footer__total">TOTAL = ${totalOfCart()}</div>
      <div className="my-3">
        <Link className="btn cart-footer__btn" to="/checkout">
          PROCESAR COMPRA
        </Link>
      </div>
    </div>
  );
};

export default Footer;
