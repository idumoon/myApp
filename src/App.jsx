import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";

export const CartContext = createContext(null);

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (targetIndex) => {
    setCart(cart.filter((_, index) => index !== targetIndex));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <BrowserRouter basename="/myApp">
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:category/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}
