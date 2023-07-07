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
import { TabCotainer, TabButton, TabContent } from "./tabstyle/TabStyle";

// ---- 상품 정보 스타일
import { ProductContent } from "./productinfostyle/ProductContent";
import { ProductInfoButton } from "./productinfostyle/ProductInfoButton";

// ---- 문의사항 스타일
import { Inquiryguide } from "./inquirystyle/Inquiryguide";
import { InquiryguideBox } from "./inquirystyle/InquiryguideBox";
import { TextDivStyle, LeftMargin } from "./inquirystyle/InquiryText";

const fontSize18 = "18px";

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
      activeTab: "product-info", // product-info
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
          <ProductPublicImage />

          {/* 제품 명 , 제품 가격*/}
          <ProductPublicInfo />

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
            {/* 상품 정보 */}
            <ProductPublicImage />
            <ProductInfoButton
              onClick={() => {
                this.toggleExpanded();
                this.scrollToBottom();
              }}
            >
              {this.state.isExpanded ? "접기" : "상품 정보 펼쳐보기"}
            </ProductInfoButton>
            <ProductContent>Product.content</ProductContent>
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
            {/* 문의하기 */}
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

            <InquiryguideBox height="250px">
              <TextDivStyle TopMargin="20px" BottomMargin="20px">
                문의사항 예시
              </TextDivStyle>
              <TextDivStyle FontSize={fontSize18} BottomMargin="30px">
                Q. 배송은 언제 되나요? - 영업일 기준 13시 이전 결제 주문건 :
                당일 출고됩니다.
              </TextDivStyle>

              <TextDivStyle FontSize={fontSize18} BottomMargin="30px">
                Q. 배송 전 취소 하고 싶어요! - 사이트에서 취소 문의 후
                고객센터로 연락 바랍니다.
              </TextDivStyle>
              <TextDivStyle FontSize={fontSize18} BottomMargin="30px">
                Q. 사이즈가 안맞아요. 교환가능한가요? - 교환요청 후 고객센터로
                연락 바랍니다.
              </TextDivStyle>
            </InquiryguideBox>
            <ProductInfoButton>문의하러 가기</ProductInfoButton>
          </TabContent>
        </ProductDetailContent>
      </ProductDetailContainer>
    );
  }
}

export default ProductDetailStyles;
