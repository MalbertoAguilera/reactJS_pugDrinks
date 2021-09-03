import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartScreen from "./components/CartScreen";
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
          <Route exact path="/cart">
            <Container>
              <CartScreen />
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
