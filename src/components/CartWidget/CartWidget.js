import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";

const CartWidget = () => {
      return ( 
            <div className = "contenedorCarrito">
                  <FaCartArrowDown className = "iconoCarrito"/>
            </div>
      );
}

export default CartWidget;