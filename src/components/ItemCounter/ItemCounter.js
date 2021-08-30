import React, {useState} from 'react';

const ItemCounter = ({initial = 1, stock = 10, amount, onAdd, setAmount}) => {

      const handleAdd = () =>{
            if(amount < stock)
                  setAmount(amount + 1);
      }
      const handleSubtract = () =>{
            if(amount > 1)
                  setAmount(amount - 1);
      }
      
      return (  
            <div>
                  <div>{amount}</div>
                  <button onClick={handleAdd}>+</button>
                  <button onClick={onAdd}>Agregar al carrito</button>
                  <button onClick={handleSubtract}>-</button>
            </div>
      );
}

export default ItemCounter;