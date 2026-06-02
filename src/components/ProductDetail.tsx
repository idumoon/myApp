import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { productData } from "./ProductList.js";

// JS 전역 컨텍스트를 TS 환경에서 안전하게 가져오기 위한 에러 억제 주석 기법
// @ts-ignore
import { CartContext } from "../App";

type CartItem = {
  id: string;
  name: string;
  price: number;
  category: string;
};

export default function ProductDetail() {
  // [Hook 1] useParams: 라우터 파라미터 값 가져오기
  const { category, id } = useParams<{ category: string; id: string }>();

  // [Hook 2] useContext: App.js가 채워놓은 전역 장바구니 추가 함수 가져오기
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
