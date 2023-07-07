import React from "react";
import { styled } from "styled-components";
import { animateScroll as scroll } from "react-scroll";

// 제품 이미지 스타일링
const ProductDetailContainer = styled.div`
  width: 834px;
  height: 100%;
  border: 2px solid black;
  display: flex;
  justify-content: center;
`;
const ProductDetailContent = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid red;
  margin: 50px;
`;

//------------------ 이미지
const ProductImageContainer = styled.div`
  width: 100%;
  height: 600px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;
const ProductImage = styled.img`
  width: 95%;
  height: 95%;
  border: 2px solid red;
`;

// ----------------상품 명, 가격 Container
const ProductNameContainer = styled.div`
  width: 100%;
  height: 200px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  padding: 24px;
`;

const ProductName = styled.div`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 24px;
`;

const ProductPrice = styled.div`
  font-size: 32px;
  font-weight: 600;
`;

// ----------------- 탭
const TabCotainer = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid black;
`;
const TabButton = styled.button`
  width: 33%;
  height: 100px;
  background-color: white;
  font-size: 18px;
  font-weight: 600;
  border: none;
`;

// 탭 내용 스타일링
const TabContent = styled.div`
  width: 100%;
  max-height: ${props => (props.isExpanded ? "none" : "1200px")};
  height: ${props => (props.isExpanded ? "auto" : "710px")};
  overflow: hidden;
  border: 5px solid green;
  transition: max-height 0.3s ease;
`;

// ---- Tab 1  상품정보
const ProductInfoButton = styled.button`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #c4c4c2;

  font-size: 18px;
  font-weight: 600;

  border: 2px solid black;
  border-radius: 5px;
  margin-bottom: ${props => (props.isExpanded ? "0" : "20px")};
`;

const ProductTest = styled.div`
  width: 100%;
  height: 1000px;
  background-color: yellow;

  transition: margin-top 2s ease;
  // margin-top: ${props => (props.isExpanded ? "20px" : "0px")};
`;

class ProductDetailStyles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "product-info",
      isExpanded: false,
    };
  }

  openTab(tabName) {
    this.setState({ activeTab: tabName });
  }

  toggleExpanded() {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded,
    }));
  }

  scrollToBottom() {
    scroll.scrollToBottom();
  }

  render() {
    const { activeTab } = this.state;

    return (
      <ProductDetailContainer>
        <ProductDetailContent>
          {/* 제품 이미지 */}

          <ProductImageContainer>
            <ProductImage src="product_image.jpg" alt="Product.url" />
          </ProductImageContainer>

          {/* 제품 명 , 제품 가격*/}
          <ProductNameContainer>
            <ProductName>상품명 : Product.name </ProductName>
            <ProductPrice>가격: product.price 원</ProductPrice>
          </ProductNameContainer>

          {/* 탭 */}
          <TabCotainer>
            <TabButton onClick={() => this.openTab("product-info")}>
              상품정보
            </TabButton>
            <TabButton onClick={() => this.openTab("reviews")}>리뷰</TabButton>
            <TabButton onClick={() => this.openTab("contact")}>
              문의하기
            </TabButton>
          </TabCotainer>

          {/* 탭 내용 */}
          <TabContent
            isExpanded={this.state.isExpanded ? "expanded" : ""}
            style={{ display: activeTab === "product-info" ? "block" : "none" }}
          >
            {/* 상품 정보 탭 내용 작성 */}
            <ProductImageContainer>
              <ProductImage src="product_image.jpg" alt="Product.url" />
            </ProductImageContainer>
            <ProductInfoButton
              onClick={() => {
                this.toggleExpanded();
                this.scrollToBottom();
              }}
            >
              {this.state.isExpanded ? "접기" : "상품 정보 펼쳐보기"}
            </ProductInfoButton>
            <ProductTest>Product.content</ProductTest>
          </TabContent>

          <TabContent
            style={{ display: activeTab === "reviews" ? "block" : "none" }}
          >
            {/* 리뷰 탭 내용 작성 */}
            <p>리뷰 내용을 어떻게 할것인가? .</p>
          </TabContent>

          <TabContent
            style={{ display: activeTab === "contact" ? "block" : "none" }}
          >
            {/* 문의하기 탭 내용 작성 */}
            <p>
              문의 안내 사항 + 배송/결제/교환/반품 안내 + 문의사항 예시 + 상품
              문의하기 버튼 .
            </p>
          </TabContent>
        </ProductDetailContent>
      </ProductDetailContainer>
    );
  }
}

export default ProductDetailStyles;
