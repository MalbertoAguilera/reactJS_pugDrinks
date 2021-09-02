import React from 'react';

const ItemCounter = ({initial = 1, stock = 10, amount, handleOnAdd, setAmount}) => {

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
                  <button onClick={handleOnAdd}>Agregar al carrito</button>
                  <button onClick={handleSubtract}>-</button>
            </div>
      );
}

export default ItemCounter;