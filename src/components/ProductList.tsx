import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

// 상품 데이터 타입 정의
export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  desc: string;
};

// 고유 상품 데이터 리스트
export const productData: Product[] = [
  {
    id: "1",
    name: "리액트 프로그래밍 교재",
    price: 25000,
    category: "books",
    desc: "인덕대학교 컴퓨터소프트웨어학과 전공 교재입니다.",
  },
  {
    id: "2",
    name: "자바스크립트 완벽 가이드",
    price: 33000,
    category: "books",
    desc: "최신 자바스크립트 문법과 명세를 다루는 가이드북입니다.",
  },
  {
    id: "3",
    name: "무선 기계식 키보드",
    price: 89000,
    category: "electronics",
    desc: "타건감이 부드럽고 소음이 적은 사무용 키보드입니다.",
  },
  {
    id: "4",
    name: "블루투스 무선 마우스",
    price: 45000,
    category: "electronics",
    desc: "손목이 편안한 인체공학 디자인 무선 마우스입니다.",
  },
];

export default function ProductList() {
  // [Hook 1] useState: 현재 선택된 카테고리 필터 상태 관리 ('all', 'books', 'electronics')
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  // [Hook 2] useMemo: 카테고리가 변경될 때만 대용량 데이터 연산(필터링)을 재수행하여 성능 최적화
  const filteredProducts = useMemo(() => {
    if (categoryFilter === "all") return productData;
    return productData.filter((product) => product.category === categoryFilter);
  }, [categoryFilter]);

  return (
    <div className="container">
      <h2>🌱 인덕 미니 마켓 상품 목록</h2>

      {/* 과제 가산점을 위한 카테고리 필터 버튼 탭 */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={() => setCategoryFilter("all")}
          style={{
            padding: "8px 16px",
            cursor: "pointer",
            background: categoryFilter === "all" ? "#1abc9c" : "#bdc3c7",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          전체보기
        </button>
        <button
          onClick={() => setCategoryFilter("books")}
          style={{
            padding: "8px 16px",
            cursor: "pointer",
            background: categoryFilter === "books" ? "#1abc9c" : "#bdc3c7",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          도서 📚
        </button>
        <button
          onClick={() => setCategoryFilter("electronics")}
          style={{
            padding: "8px 16px",
            cursor: "pointer",
            background:
              categoryFilter === "electronics" ? "#1abc9c" : "#bdc3c7",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          전자기기 💻
        </button>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p className="price">가격: {product.price}원</p>
            <p className="category">
              분류: {product.category === "books" ? "도서" : "전자기기"}
            </p>
            <Link
              to={`/product/${product.category}/${product.id}`}
              className="detail-btn"
            >
              상세보기
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
