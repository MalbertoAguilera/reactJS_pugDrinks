import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UIContextProvider } from "./context/UIContext";
import { CartContextProvider } from "./context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/styles.scss";

ReactDOM.render(
  <React.StrictMode>
    <UIContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </UIContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
