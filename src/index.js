import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
 import {BrowserRouter as Router} from "react-router-dom"
import { CartContext, CartProvider } from './pages/context/cartContext';

 

// Call make Server
makeServer();

export {CartContext} ;

ReactDOM.render(
  <React.StrictMode>
   <Router>
   <CartProvider>
      <App />
    </CartProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
