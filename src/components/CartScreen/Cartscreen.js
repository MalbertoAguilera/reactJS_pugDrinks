import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FaTrashAlt } from 'react-icons/fa';

const CartScreen = () => {

      const {cart,emptyCart, deleteFromCart} = useContext(CartContext);

      return (  
            <div>
                  <h1>Resumen de compra</h1>
                  <hr></hr>
                  {cart.map(item =>
                        <div>
                              <h3>{item.name}</h3>
                              <h3>{item.price}</h3>
                              <h3>{item.amount}</h3>
                              <h3>{item.id}</h3>
                              <FaTrashAlt onClick={()=>deleteFromCart(item.id)}/>
                              <hr></hr>
                        </div>
                  )}
                  <hr></hr>
                  <button onClick={emptyCart}>Vaciar Carrito</button>
            </div>
      );
}

export default CartScreen;