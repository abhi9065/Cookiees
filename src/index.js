import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
 import {BrowserRouter as Router} from "react-router-dom"
import { CartContext, CartProvider } from './pages/context/cartContext';
import { AuthContext , AuthProvider } from "./pages/context/AuthContext";
 

// Call make Server
makeServer();

export {CartContext} ;
export {AuthContext}

ReactDOM.render(
  <React.StrictMode>
   <Router>
   <AuthProvider>
   <CartProvider>
      <App />
    </CartProvider>
    </AuthProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
