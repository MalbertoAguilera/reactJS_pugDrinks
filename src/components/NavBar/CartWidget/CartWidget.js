import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CartWidget.scss";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <div className="contenedorCarrito">
        <FaCartArrowDown className="iconoCarrito" />
      </div>
    </Link>
  );
};

export default CartWidget;
