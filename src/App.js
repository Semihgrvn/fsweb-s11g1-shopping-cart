import React, { useState } from "react";
import { Route } from "react-router-dom";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import CartContextProvider from "./context/CartContext";
import ProductContextProvider from "./context/ProductContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <ProductContextProvider>
          <Navigation />

          {/* Routelar */}
          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>

            <Route path="/cart">
              <ShoppingCart />
            </Route>
          </main>
        </ProductContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
