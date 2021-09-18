import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
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
          <Route exact path="/checkout">
            <Checkout/>
          </Route>
          <Route exact path="/cart">
            <Container>
              <Cart />
            </Container>
          </Route>
          <Route path="*">
            <Container>
              <h1>------------ERROR 404---------------</h1>
            </Container>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
