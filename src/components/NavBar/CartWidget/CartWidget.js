import React, {useContext} from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./CartWidget.scss";

const CartWidget = () => {

  const {amountCart} = useContext(CartContext);
  
  return (
    <Link to="/cart">
      <div className="contenedorCarrito">
        <FaCartArrowDown className="iconoCarrito" />
        <span>{amountCart()}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
