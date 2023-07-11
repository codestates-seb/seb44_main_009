import React from "react";
import { animateScroll as scroll } from "react-scroll";

// ----  퍼블릭 스타일
import {
  ProductDetailContainer,
  ProductDetailContent,
} from "./publicstyle/ProductDetailContainer";

import { ProductPublicImage } from "./publicstyle/ProductPublicImage";
import { ProductPublicInfo } from "./publicstyle/ProductPublicInfo";

//   ---- 탭 스타일
import { TabCotainer, TabButton } from "./tabstyle/TabStyle";
import { TabContent } from "./tabstyle/TabContent";

// ---- 상품 정보 스타일
import { ProductContent } from "./productinfostyle/ProductContent";
import { ProductInfoButton } from "./productinfostyle/ProductInfoButton";

// ---- 문의사항 스타일

import { DeliveryInquiry } from "./inquirystyle/DeliveryInquiry";
import { InquiryguideFrame } from "./inquirystyle/InquiryguideFrame";
import { ProductPublicInquiryEx } from "./inquirystyle/ProductPublicInquiryEx";

// // ----  리뷰 스타일

import { ReviewHeaderForm } from "./reviewstyle/ReviewHeaderForm";
import { ReviewForm } from "./reviewstyle/ReviewForm";

//배송/결제/교환/반품

class ProductDetailStyles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "product-info", // 시작할 탭
      isexpanded: false,
      isReviewExpanded: false, // 리뷰 전체 펼쳐보기 상태
    };
  }

  openTab(tabName) {
    this.setState({ activeTab: tabName });
  }

  toggleExpanded() {
    this.setState(prevState => ({
      isexpanded: !prevState.isexpanded,
    }));
  }
  toggleReviewExpanded() {
    this.setState(prevState => ({
      isReviewExpanded: !prevState.isReviewExpanded,
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
          <ProductPublicImage />

          {/* 제품 명 , 제품 가격*/}
          <ProductPublicInfo />

          {/* 각 탭 이름 */}
          <TabCotainer>
            <TabButton onClick={() => this.openTab("product-info")}>
              상품
            </TabButton>
            <TabButton onClick={() => this.openTab("reviews")}>리뷰</TabButton>
            <TabButton onClick={() => this.openTab("contact")}>문의</TabButton>
          </TabCotainer>

          {/* -- 이제부터 탭 내용.. 상세 탭 내용 */}

          {/* 탭1. 상품 */}
          <TabContent
            isexpanded={this.state.isexpanded ? "expanded" : ""}
            style={{ display: activeTab === "product-info" ? "block" : "none" }}
          >
            <ProductPublicImage />
            <ProductInfoButton
              onClick={() => {
                this.toggleExpanded();
                this.scrollToBottom();
              }}
            >
              {this.state.isexpanded ? "접기" : "상품 정보 펼쳐보기"}
            </ProductInfoButton>
            <ProductContent>Product.content</ProductContent>
          </TabContent>

          {/* 탭2. 리뷰  */}
          <TabContent
            isexpanded={this.state.isReviewExpanded ? "expanded" : ""}
            style={{ display: activeTab === "reviews" ? "block" : "none" }}
          >
            <ReviewHeaderForm></ReviewHeaderForm>
            <ReviewForm></ReviewForm>
            <ProductInfoButton
              onClick={() => {
                this.toggleReviewExpanded();
                this.scrollToBottom();
              }}
            >
              {this.state.isReviewExpanded ? "접기" : "리뷰 전체 보기"}
            </ProductInfoButton>
          </TabContent>

          {/* 탭3. 문의 */}
          <TabContent
            style={{ display: activeTab === "contact" ? "block" : "none" }}
          >
            <InquiryguideFrame />

            <DeliveryInquiry />

            <ProductPublicInquiryEx />

            <ProductInfoButton>문의하러 가기</ProductInfoButton>
          </TabContent>
        </ProductDetailContent>
      </ProductDetailContainer>
    );
  }
}

export default ProductDetailStyles;
