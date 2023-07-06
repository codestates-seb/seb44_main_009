import React from "react";
import { styled } from "styled-components";

// 제품 이미지 스타일링
const ProductImageContainer = styled.div`
  width: 755px;
  height: 600px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProductImage = styled.img`
  width: 95%;
  height: 95%;
  border: 2px solid red;
`;

// ----------------상품 명, 가격 Container

// 제품 명 스타일링
const ProductName = styled.text`
  font-size: 24px;
  font-weight: 400;
`;

// 제품 가격 스타일링
const ProductPrice = styled.text`
  font-size: 32px;
  font-weight: 600;
`;

// 탭 스타일링
const TabButton = styled.button`
  /* 스타일 작성 */
`;

// 탭 내용 스타일링
const TabContent = styled.div`
  /* 스타일 작성 */
`;

class ProductDetailStyles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "product-info",
    };
  }

  openTab(tabName) {
    this.setState({ activeTab: tabName });
  }

  render() {
    const { activeTab } = this.state;

    return (
      <div>
        {/* 제품 이미지 */}
        <ProductImageContainer>
          <ProductImage src="product_image.jpg" alt="제품 이미지" />
        </ProductImageContainer>

        {/* 제품 명 */}
        <ProductName>상품명</ProductName>

        {/* 제품 가격 */}
        <ProductPrice>가격: $99.99</ProductPrice>

        {/* 탭 */}
        <div>
          <TabButton onClick={() => this.openTab("product-info")}>
            상품 정보
          </TabButton>
          <TabButton onClick={() => this.openTab("reviews")}>리뷰</TabButton>
          <TabButton onClick={() => this.openTab("contact")}>
            문의하기
          </TabButton>
        </div>

        {/* 탭 내용 */}
        <TabContent
          style={{ display: activeTab === "product-info" ? "block" : "none" }}
        >
          {/* 상품 정보 탭 내용 작성 */}
          <p>상품 정보 내용입니다.</p>
        </TabContent>

        <TabContent
          style={{ display: activeTab === "reviews" ? "block" : "none" }}
        >
          {/* 리뷰 탭 내용 작성 */}
          <p>리뷰 내용입니다.</p>
        </TabContent>

        <TabContent
          style={{ display: activeTab === "contact" ? "block" : "none" }}
        >
          {/* 문의하기 탭 내용 작성 */}
          <p>문의하기 내용입니다.</p>
        </TabContent>
      </div>
    );
  }
}

export default ProductDetailStyles;
