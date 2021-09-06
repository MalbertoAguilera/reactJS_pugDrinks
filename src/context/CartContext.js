import React, {useState, createContext} from 'react';

// 1)CREACION DEL CONTEXTO
const CartContext = createContext();

// 2)creacion de componente CUSTOM PROVIDER

const CartContextProvider = ({children}) => {
      
      const [cart, setCart] = useState([]);
      
      const addItem = (item, quantity)=>{
            
            if(isInCart(item.id)){
                  
                  const copyOfCart = [...cart];
                  const indexItem = cart.findIndex( product => product.id === item.id );
                  copyOfCart[indexItem] = { ...copyOfCart[indexItem], quantity: quantity};
                  setCart(copyOfCart);
            } else {
                  setCart([...cart, { ...item, quantity }]);
            }
      };
      
      const removeItem = (id) =>{setCart(cart.filter(item => item.id !== id));};

      const quantityOfCart = () => cart.reduce((acc,item)=>acc+item.quantity,0);

      const clear= ()=>{ setCart([])};

      const isInCart = id => cart.some(item => item.id ===id);
            
      return(
            <CartContext.Provider value={{cart, addItem,removeItem,quantityOfCart, clear,isInCart}}>
                  {children}
            </CartContext.Provider>
      );
}

export {CartContextProvider, CartContext};
