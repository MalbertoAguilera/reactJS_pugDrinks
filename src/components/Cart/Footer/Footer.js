import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import './Footer.scss';

const Footer = () => {

      const {totalOfCart} = useContext(CartContext);

      return (  
            <div className="cart-footer">TOTAL = ${totalOfCart()}</div>
      );
}
 
export default Footer;