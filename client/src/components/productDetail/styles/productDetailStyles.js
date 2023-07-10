import React from "react";
import { styled } from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

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
import { Inquiryguide } from "./inquirystyle/Inquiryguide";
import { InquiryguideBox } from "./inquirystyle/InquiryguideBox";
import { TextDivStyle, LeftMargin } from "./inquirystyle/InquiryText";

import { ProductPublicInquiryEx } from "./inquirystyle/ProductPublicInquiryEx";

// // ----  리뷰 스타일

// import { ReviewImg } from "./reviewstyle/ReviewImg";
// import { ReviewDrop } from "./reviewstyle/ReviewDrop";
import { ReviewHeaderForm } from "./reviewstyle/ReviewHeaderForm";
import { ReviewForm } from "./reviewstyle/ReviewForm";

const InfoIcon = styled(FontAwesomeIcon)`
  /* Styles for the icon */
  width: 24px;
  height: 24px;
`;

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
              상품정보
            </TabButton>

            <TabButton onClick={() => this.openTab("reviews")}>리뷰</TabButton>

            <TabButton onClick={() => this.openTab("contact")}>
              문의하기
            </TabButton>
          </TabCotainer>

          {/* -- 이제부터 탭 내용.. 상세 탭 내용 */}

          {/* 탭1. 상품 정보 */}
          <TabContent
            isexpanded={this.state.isexpanded ? "expanded" : undefined}
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

          {/* 탭2. 리뷰 탭  */}
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

          {/* 탭3. 문의하기 */}
          <TabContent
            style={{ display: activeTab === "contact" ? "block" : "none" }}
          >
            <InquiryguideBox justifyContent="center" alignItems="center">
              <Inquiryguide>
                <TextDivStyle>문의 안내사항</TextDivStyle>
              </Inquiryguide>
            </InquiryguideBox>

            <InquiryguideBox height="100px" justifyContent="center">
              <TextDivStyle>
                배송 / 결제 / 교환 / 반품 안내 <LeftMargin />
                <InfoIcon icon={faEye} />
              </TextDivStyle>
            </InquiryguideBox>

            <ProductPublicInquiryEx />
            <ProductInfoButton>문의하러 가기</ProductInfoButton>
          </TabContent>
        </ProductDetailContent>
      </ProductDetailContainer>
    );
  }
}

export default ProductDetailStyles;

// 1. 리뷰 폼 (완성)
// 1-1및 이어 붙이기
// 2. ProductDetailPage 헤더 , 푸터 붙이기.

// 3. 스타일 분리하기
// 4. border 없애기
// 5. App 정리 후 push 및 Pr
