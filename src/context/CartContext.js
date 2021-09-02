import React, {useState, createContext, useContext} from 'react';


// 1)CREACION DEL CONTEXTO
export const CartContext = createContext();

// 2) creacion del context para destructuring
export const useCartContext = () => useContext(CartContext);
// 3)creacion de componente CUSTOM PROVIDER

export const CartContextProvider = ({children}) => {
      
      const [cart, setCart] = useState([]);
      
      const addOnCart = (item)=>{setCart([...cart, item]);};
      
      const deleteFromCart = (id) =>{setCart(cart.filter(item => item.id !== id));};

      const amountCart = () => cart.reduce((acc,item)=>acc+item.amount,0);

      const emptyCart= ()=>{ setCart([])};
            
      return(
            <CartContext.Provider value={{cart, addOnCart,deleteFromCart,amountCart, emptyCart}}>
                  {children}
            </CartContext.Provider>
      );
}
