import React, { useContext } from "react";
import { CartContext } from "../App";
import CartItem from "./CartItem";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <h2>나의 장바구니</h2>

      {cart.length === 0 ? (
        <p className="empty-msg">
          장바구니가 비어 있습니다. 상품을 추가해 주세요.
        </p>
      ) : (
        <div>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                index={index}
                onRemove={removeFromCart}
              />
            ))}
          </ul>

          <div className="total-container">
            <h3>
              총 결제 금액: <span className="total-price">{totalAmount}원</span>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
