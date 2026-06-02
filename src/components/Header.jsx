import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";

export default function Header() {
  // [Hook] useContext: 전역 Context로부터 실시간 cart 배열 상태를 구독
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">🌱 인덕 미니 마켓</Link>
      </div>
      <nav className="nav-links">
        <Link to="/">상품 목록</Link>
        <Link to="/cart" className="cart-link">
          장바구니 🛒 <span className="cart-count">{cart.length}</span>
        </Link>
      </nav>
    </header>
  );
}
