import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";

// 11장 교안 기반: 전역으로 장바구니 상태를 공유할 Context 생성
export const CartContext = createContext(null);

export default function App() {
  const [cart, setCart] = useState([]);

  // 장바구니 추가 함수
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // 장바구니 삭제 함수
  const removeFromCart = (targetIndex) => {
    setCart(cart.filter((_, index) => index !== targetIndex));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <BrowserRouter>
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
