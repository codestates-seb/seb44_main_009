import { useState, useEffect } from "react";
// import axios from "axios";
import Header_back from "../../../components/header/Header_back";
import Footer from "../../../components/footer/Footer";
import { ReviewContainer } from "./styles/ReviewContainer.styled";
import { ReviewWrapper } from "./styles/ReviewWrapper.styled";
import { Title } from "./styles/Title.styled";
import MyReviewList from "../../../components/review/MyReviewList";
// import { findReview } from "../../../api/orderAPIs";
import { getUserReviewList } from "../../../api/userAPI";
import { useRecoilValue } from "recoil";
import { auth } from "../../../atoms/auth";

function MyReviewPage() {
  const { token } = useRecoilValue(auth);
  const [reviews, setReviews] = useState([]);
  // const [reviewId, setReviewId] = useState(null);

  // useEffect(() => {
  //   const reviewResponseData = JSON.parse(
  //     localStorage.getItem("reviewResponseData"),
  //   );

  //   if (reviewResponseData) {
  //     const { reviewId } = reviewResponseData;

  //     setReviewId(reviewId);
  //     console.log(reviewId);
  //   } else {
  //     console.log("Invalid data format or missing data.");
  //   }
  // }, []);

  // useEffect(() => {
  //   const fetchReview = async () => {
  //     try {
  //       const data = await findReview(token, reviewId);
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Error fetching review:", error);
  //     }
  //   };

  //   fetchReview();
  // }, []);

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
