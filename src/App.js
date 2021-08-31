import React, {useState} from "react";
import { CartContext } from "./context/CartContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Container } from "react-bootstrap";

function App() {
  
  const unaVariable = "soy una variable de contexto APP";
  const otraVariable = "soy OTRA variable de contexto APP";

  const [carrito, setCarrito] = useState([]);
  
  return (
    <>
      <CartContext.Provider 
        value={
                {
                  unaVariable, 
                  otraVariable,
                  carrito,
                  setCarrito
                }
              }
      >
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/category/:catName">
              <ItemListContainer />
            </Route>
            <Route exact path="/item/:itemId">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <Container>
                <h1>------------Contenido carrito---------</h1>
              </Container>
            </Route>
            <Route path="*">
              <Container>
                <h1>------------ERROR 404---------------</h1>
              </Container>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}

export default App;
