import { useState, useEffect } from "react";
// import axios from "axios";
import Header_back from "../../../components/header/Header_back";
import Footer from "../../../components/footer/Footer";
import { ReviewContainer } from "./styles/ReviewContainer.styled";
import { ReviewWrapper } from "./styles/ReviewWrapper.styled";
import { Title } from "./styles/Title.styled";
import MyReviewList from "../../../components/review/MyReviewList";

function MyReviewPage() {
  const [reviews, setReviews] = useState([]);
  const tempReview = {
    reviewId: 1,
    productName: "꽈배기 카라 집업[웜톤]",
    content: " 38000 원",
    vote: 5,
  };
  useEffect(() => {
    setReviews([tempReview]);
  }, []);

  // 해당 유저 리뷰 목록 데이터 조회 + {member-id}로 변경하기
  // useEffect(() => {
  //   axios
  //     .get("/review/findByMember/1")
  //     .then(response => setReviews(response.data.data.responseList))
  //     .catch(error => console.error("Error fetching data:", error));
  // }, []);

  return (
    <ReviewContainer>
      <Header_back />
      <ReviewWrapper>
        <Title>나의 리뷰</Title>
        <MyReviewList reviews={reviews} />
      </ReviewWrapper>
      <Footer />
    </ReviewContainer>
  );
}

export default MyReviewPage;
