import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
//import { dummyproducts } from "../../../dummyDate/dummyProducts";
//import { dummyReview } from "../../../dummyDate/dummyReview";
import { reviewfilter } from "../../../dummyDate/reviewfilter";
import { fetchReviews, fetchProducts } from "../../../api/product";

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
import { ReviewPersonalBar } from "./reviewstyle/ReviewPersonalBar";
import { NoReviews } from "./reviewstyle/reviewContentstyle/reviewcontentstyles/NoReviews";

const ProductDetailStyles = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  // 1. Product 더미데이터
  // const product = dummyproducts.find(p => p.productId === parseInt(productId));

  // 2. Product api 데이터
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts();
        const foundProduct = products.find(
          p => p.productId === parseInt(productId),
        );
        setProduct(foundProduct);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  //1. 리뷰 받아오는 곳 - api 데이터
  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviews = await fetchReviews(productId);
        setReviews(reviews);
      } catch (error) {
        console.error("Error getting reviews:", error);
      }
    };

    getReviews();
  }, [productId]); // productId가 변경될 때마다 리뷰 바뀜.

  // Tab 기능
  const [activeTab, setActiveTab] = useState("product-info");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isReviewExpanded, setIsReviewExpanded] = useState(false);
  const [selectedDropOption, setSelectedDropOption] = useState(
    reviewfilter[0].slug,
  );

  useEffect(() => {
    setIsReviewExpanded(false);
  }, [selectedDropOption]);

  const onFilterChange = selectedDropOption => {
    setSelectedDropOption(selectedDropOption);
  };
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

  if (loading) {
    return <div>Loading...</div>;
  }

  function sortReviews(Dropoption) {
    if (!reviews || !reviews.data || reviews.data.totalCount === 0) {
      return [];
    }

    switch (Dropoption) {
      case "coolColor":
        return reviews.data.responseList.filter(
          review => review.productPersonalColorStatus === "COOL",
        );
      case "warmColor":
        return reviews.data.responseList.filter(
          review => review.productPersonalColorStatus === "WARM",
        );
      case "highVote":
        return reviews.data.responseList.sort((a, b) => b.vote - a.vote);
    }
  }
  const sortedReviews = sortReviews(selectedDropOption);

  // console.log("reviews", reviews);
  //console.log("product", product);
  return (
    <ProductDetailContainer>
      <ProductDetailContent>
        {/* 제품 이미지 */}
        <ProductPublicImage url={product.productImageName} />

        {/* 제품 명 , 제품 가격*/}
        <ProductPublicInfo
          name={product.name}
          price={product.price}
          color={product.personalColor === "WARM_TONE" ? "orange" : "pink"}
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
          {/* <ProductPublicImage url={product.url} /> */}
          <ProductPublicImage url=" https://img.freepik.com/free-vector/background-of-coming-soon-with-a-clock_1017-5059.jpg?w=826&t=st=1688544622~exp=1688545222~hmac=9340ba92730b0d3c10f8db2ad9d60b2f564990234e283bac6fb44d2159e6aee0" />
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
          <ReviewHeaderForm
            reviewfilter={reviewfilter}
            onFilterChange={onFilterChange}
            selectedDropOption={selectedDropOption}
          />

          {/* 더미데이터 Review */}
          {/* <ReviewPersonalBar
            coolToneCount={reviews[0].data.personalColorCoolCount}
            warmToneCount={reviews[0].data.personalColorWormCount} // 오타
          /> */}

          {/* API Review */}
          {reviews.data ? (
            <ReviewPersonalBar
              coolToneCount={reviews.data.personalColorCoolCount}
              warmToneCount={reviews.data.personalColorWormCount}
            />
          ) : null}

          {sortedReviews.length > 0 && (
            <div>
              {sortedReviews.map(sortedReviews => (
                <ReviewContent
                  key={sortedReviews.id}
                  review={sortedReviews}
                  selectedDropOption={selectedDropOption}
                  vote={sortedReviews.vote}
                />
              ))}
              <ProductInfoButton
                onClick={() => {
                  toggleReviewExpanded();
                  scrollToBottom();
                }}
              >
                {isReviewExpanded ? "접기" : "리뷰 전체 보기"}
              </ProductInfoButton>
            </div>
          )}

          {sortedReviews.length === 0 && (
            <NoReviews>리뷰가 없습니다.</NoReviews>
          )}
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
