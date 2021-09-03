import React, {useState, createContext} from 'react';

// 1)CREACION DEL CONTEXTO
const CartContext = createContext();

// 2)creacion de componente CUSTOM PROVIDER

const CartContextProvider = ({children}) => {
      
      const [cart, setCart] = useState([]);
      
      const addItem = (item, quantity)=>{setCart([...cart, {...item, quantity}]);};
      
      const deleteFromCart = (id) =>{setCart(cart.filter(item => item.id !== id));};

      const amountCart = () => cart.reduce((acc,item)=>acc+item.amount,0);

      const emptyCart= ()=>{ setCart([])};
            
      return(
            <CartContext.Provider value={{cart, addItem,deleteFromCart,amountCart, emptyCart}}>
                  {children}
            </CartContext.Provider>
      );
}

export {CartContextProvider, CartContext};
