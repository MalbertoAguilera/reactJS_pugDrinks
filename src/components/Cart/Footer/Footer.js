import React from 'react';
import './Footer.scss';

const Footer = ({totalOfCart}) => {
      return (  
            <div className="cart-footer">TOTAL = ${totalOfCart()}</div>
      );
}
 
export default Footer;