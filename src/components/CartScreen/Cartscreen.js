import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FaTrashAlt } from 'react-icons/fa';
import './CartScreen.scss';

const CartScreen = () => {

      const {cart,clear,removeItem} = useContext(CartContext);

      return (  
            <div className="container-cartScreen">
                  <h1>Resumen de compra</h1>
                  <hr></hr>
                  {cart.map(item =>
                        <div key={item.id}>
                              <h3>{item.name}</h3>
                              <h3>${item.price}</h3>
                              <h3>Cantidad: {item.quantity}</h3>
                              <FaTrashAlt style={{color:'red', fontSize:'30px'}} onClick={()=>removeItem(item.id)}/>
                              <hr></hr>
                        </div>
                  )}
                  <hr></hr>
                  <button onClick={clear}>Vaciar Carrito</button>
            </div>
      );
}

export default CartScreen;