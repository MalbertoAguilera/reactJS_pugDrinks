import React, {useState, createContext, useContext} from 'react';

// 1)CREACION DEL CONTEXTO
export const UIContext = createContext();

// 2) creacion del context para destructuring
export const useUIContext = () => useContext(UIContext);

// 3)creacion de componente CUSTOM PROVIDER

export const UIContextProvider = ({children}) => {

      const [loading, setLoading] = useState(false);

      return(
            <UIContext.Provider value={{loading, setLoading}}>
                  {children}
            </UIContext.Provider>
      );
}