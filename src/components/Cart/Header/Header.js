
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";
import './Header.scss';

const Header = ({clear}) => {
      return (  
            <div className="cart-header container">
                  <Button className="cart-header__button" onClick={clear} >
                        <span className="cart-header__text">Vaciar Carrito</span>
                        <FaTrashAlt className="cart-header__icon"/>
                  </Button>
            </div>
      );
}

export default Header;