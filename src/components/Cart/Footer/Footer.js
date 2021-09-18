import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../../context/CartContext';
import './Footer.scss';

const Footer = () => {

      const {totalOfCart} = useContext(CartContext);

      return (

            <div className="cart-footer">
                  <div>
                  TOTAL = ${totalOfCart()}
                  </div>
                  <div>
                  <Link to="/checkout">TERMINAR COMPRA</Link>

                  </div>
                  
                
            </div>
     
      );
}
 
export default Footer;