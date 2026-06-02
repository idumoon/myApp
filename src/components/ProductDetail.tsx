import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { productData } from "./ProductList.js";

// @ts-ignore
import { CartContext } from "../App";

type CartItem = {
  id: string;
  name: string;
  price: number;
  category: string;
};

export default function ProductDetail() {
  const { category, id } = useParams<{ category: string; id: string }>();

  // @ts-ignore
  const { addToCart } = useContext(CartContext);

  const product = productData.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container">
        <h3>상품을 찾을 수 없습니다.</h3>
      </div>
    );
  }

  const handleCartClick = () => {
    const itemToSubmit: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
    };
    addToCart(itemToSubmit);
    alert(`${product.name} 상품이 장바구니에 추가되었습니다!`);
  };

  return (
    <div className="container">
      <div className="detail-container">
        <h2>상품 상세 정보</h2>
        <hr />
        <h3>{product.name}</h3>
        <p className="detail-category">분류: {category}</p>
        <p className="detail-desc">{product.desc}</p>
        <p className="detail-price">가격: {product.price}원</p>
        <button onClick={handleCartClick} className="add-cart-btn">
          장바구니 담기 🛒
        </button>
      </div>
    </div>
  );
}
