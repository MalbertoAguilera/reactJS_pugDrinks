import React from 'react';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:catName">
            <ItemListContainer />
          </Route>
          <Route exact path="/detail/:itemId">
            <ItemDetailContainer/>
          </Route>
          <Route exact path="/cart">
            <h1>Contenido carrito</h1>
          </Route>
          <Route path="*">
            <h1>ERROR 404</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
