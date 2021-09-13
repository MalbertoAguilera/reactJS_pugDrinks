
import React, {useContext} from 'react';
import { Button } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";
import { CartContext } from '../../../context/CartContext';
import './Header.scss';

const Header = () => {
      const {clear} = useContext(CartContext);

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