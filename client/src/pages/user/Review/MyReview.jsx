import { useState, useEffect } from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import { ReviewContainer } from "./styles/ReviewContainer.styled";
import { ReviewWrapper } from "./styles/ReviewWrapper.styled";
import { Title } from "./styles/Title.styled";
import MyReviewList from "../../../components/review/MyReviewList";

function MyReviewPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const ReviewData = [
      {
        reviewId: 1,
        memberName: "jsy",
        title: "title11-1",
        content: "content11-11",
        score: 3,
      },
    ];
    setReviews(ReviewData);
  }, []);

  return (
    <ReviewContainer>
      <Header />
      <ReviewWrapper>
        <Title>나의 리뷰</Title>
        {reviews.length > 0 ? (
          <MyReviewList reviews={reviews} />
        ) : (
          <p>리뷰를 작성해주세요.</p>
        )}
      </ReviewWrapper>
      <Footer />
    </ReviewContainer>
  );
}

export default MyReviewPage;
