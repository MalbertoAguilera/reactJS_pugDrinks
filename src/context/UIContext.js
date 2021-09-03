import React, {createContext, useState} from 'react';

// 1)CREACION DEL CONTEXTO
const UIContext = createContext();

// 2)creacion de componente CUSTOM PROVIDER
const UIContextProvider = ({children}) => {

      const [loading, setLoading] = useState(false)
      return(
            <UIContext.Provider value={{loading, setLoading}}>
                  {children}
            </UIContext.Provider>
      );
}

export {UIContext, UIContextProvider};