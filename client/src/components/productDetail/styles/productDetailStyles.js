import { useState } from "react";
import { useParams } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { dummyproducts } from "../../../dummyDate/dummyProducts";
import { dummyReview } from "../../../dummyDate/dummyReview";
//import { fetchReviews } from "../../../api/product";

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
import {
  ProductContent,
  ProductContentContainer,
} from "./productinfostyle/ProductContent";
import { ProductInfoButton } from "./productinfostyle/ProductInfoButton";

// ---- 문의사항 스타일

import { DeliveryInquiry } from "./inquirystyle/DeliveryInquiry";
import { InquiryguideFrame } from "./inquirystyle/InquiryguideFrame";
import { ProductPublicInquiryEx } from "./inquirystyle/ProductPublicInquiryEx";

// // ----  리뷰 스타일

import { ReviewHeaderForm } from "./reviewstyle/ReviewHeaderForm";
import { ReviewContent } from "./reviewstyle/ReviewContent";

const ProductDetailStyles = () => {
  const { productId } = useParams();
  const product = dummyproducts.find(p => p.productId === parseInt(productId));

  //리뷰 받아오는 곳
  // const [reviews, setReviews] = useState([""]);

  // useEffect(() => {
  //   const getReviews = async () => {
  //     try {
  //       const reviews = await fetchReviews(productId);
  //       setReviews(reviews);
  //     } catch (error) {
  //       console.error("Error getting reviews:", error);
  //     }
  //   };

  //   getReviews();
  // }, [productId]); // productId가 변경될 때마다 리뷰 바뀜.

  // Tab 기능
  const [activeTab, setActiveTab] = useState("product-info");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isReviewExpanded, setIsReviewExpanded] = useState(false);

  //Props
  // const [url, setUrl] = useState("");
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");

  const openTab = tabName => {
    setActiveTab(tabName);
  };

  const toggleExpanded = () => {
    setIsExpanded(prevExpanded => !prevExpanded);
  };

  const toggleReviewExpanded = () => {
    setIsReviewExpanded(prevReviewExpanded => !prevReviewExpanded);
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  //console.log("dummyReview", dummyReview[0].data.responseList);
  // const location = useLocation();
  // const { url, name, price, color } = location.state || {};  --> 데이터가 undefined로 받아와짐

  // console.log("url", product.url);
  // console.log("name", product.name);
  // console.log("price", product.price);
  // console.log("productId", productId);
  // console.log("color", product.colors);

  return (
    <ProductDetailContainer>
      <ProductDetailContent>
        {/* 제품 이미지 */}
        <ProductPublicImage url={product.url} />

        {/* 제품 명 , 제품 가격*/}
        <ProductPublicInfo
          name={product.name}
          price={product.price}
          color={product.personalColor === "Warm" ? "orange" : "pink"}
          count={product.count}
        />

        {/* 각 탭 이름 */}
        <TabCotainer>
          <TabButton onClick={() => openTab("product-info")}>상품</TabButton>
          <TabButton onClick={() => openTab("reviews")}>리뷰</TabButton>
          <TabButton onClick={() => openTab("contact")}>문의</TabButton>
        </TabCotainer>

        {/* -- 이제부터 탭 내용.. 상세 탭 내용 */}

        {/* 탭1. 상품 */}
        <TabContent
          isexpanded={isExpanded ? "expanded" : ""}
          style={{ display: activeTab === "product-info" ? "block" : "none" }}
        >
          <ProductPublicImage url={product.url} />
          <ProductInfoButton
            onClick={() => {
              toggleExpanded();
              scrollToBottom();
            }}
          >
            {isExpanded ? "접기" : "상품 정보 펼쳐보기"}
          </ProductInfoButton>
          <ProductContentContainer>
            <ProductContent>{product.content}</ProductContent>
          </ProductContentContainer>
        </TabContent>

        {/* 탭2. 리뷰  */}
        <TabContent
          isexpanded={isReviewExpanded ? "expanded" : ""}
          style={{ display: activeTab === "reviews" ? "block" : "none" }}
        >
          <ReviewHeaderForm></ReviewHeaderForm>
          {dummyReview[0].data.responseList.map(review => (
            <ReviewContent key={review.id} review={review} />
          ))}

          <ProductInfoButton
            onClick={() => {
              toggleReviewExpanded();
              scrollToBottom();
            }}
          >
            {isReviewExpanded ? "접기" : "리뷰 전체 보기"}
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
};

export default ProductDetailStyles;
