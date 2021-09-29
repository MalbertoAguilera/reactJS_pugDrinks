import React, { useContext } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./CartWidget.scss";

const CartWidget = () => {
  const { quantityOfCart } = useContext(CartContext);

  return (
    <>
      {quantityOfCart() && (
        <Link to="/cart">
          <div className="contenedorCarrito">
            <FaCartArrowDown className="iconoCarrito" />
            <div className="contenedorCarrito__contador">
              <span>
                {quantityOfCart()}
              </span>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default CartWidget;
