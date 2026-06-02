import React from "react";

export default function CartItem({ item, index, onRemove }) {
  return (
    <li className="cart-item">
      <div>
        <span className="item-name">{item.name}</span>
        <span className="item-price">({item.price}원)</span>
      </div>
      <button onClick={() => onRemove(index)} className="delete-btn">
        삭제
      </button>
    </li>
  );
}
