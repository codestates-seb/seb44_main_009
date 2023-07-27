import { useState, useEffect } from "react";
// import axios from "axios";
import Header_back from "../../../components/header/Header_back";
import Footer from "../../../components/footer/Footer";
import { ReviewContainer } from "./styles/ReviewContainer.styled";
import { ReviewWrapper } from "./styles/ReviewWrapper.styled";
import { Title } from "./styles/Title.styled";
import MyReviewList from "../../../components/review/MyReviewList";
import { getUserReviewList } from "../../../api/userAPI";
import { useRecoilValue } from "recoil";
import { auth } from "../../../atoms/auth";

function MyReviewPage() {
  const { token } = useRecoilValue(auth);
  const [reviews, setReviews] = useState([]);

  // 유저가 작성한 리뷰 목록 조회
  useEffect(() => {
    const fetchReview = async () => {
      try {
        const data = await getUserReviewList(token);
        setReviews(data.responseList);
      } catch (error) {
        console.error("Error fetching review:", error);
      }
    };

    fetchReview();
  }, [token]);

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
