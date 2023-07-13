import { useState } from "react";
import axios from "axios";
import ReviewForm from "../../../components/review/ReviewForm";
import Header_back from "../../../components/header/Header_back";
import Footer_oneBtn from "../../../components/footer/Footer_oneBtn";
import ReviewSection from "../../../components/review/ReviewSection";
import { ReviewContainer } from "./styles/ReviewContainer.styled";
import { ReviewWrapper } from "./styles/ReviewWrapper.styled";
import { Title } from "./styles/Title.styled";
import { FooterContainer } from "./styles/FooterContainer.styled";

function ReviewUpdatePage() {
  const [enjoyStatus, setEnjoyStatus] = useState("");
  const [productPersonalColorStatus, setProductPersonalColorStatus] =
    useState("");
  const [sizeStatus, setSizeStatus] = useState("");
  const [productColorStatus, setProductColorStatus] = useState("");
  const [reviewText, setReviewText] = useState("");

  const handleReviewTextChange = e => {
    setReviewText(e.target.value);
  };

  const submitReview = () => {
    const reviewData = {
      enjoyStatus,
      productPersonalColorStatus,
      sizeStatus,
      productColorStatus,
      reviewText,
    };

    axios
      .post(`/review/create/1/2/3`, reviewData)
      .then(res => {
        console.log("리뷰가 성공적으로 업데이트되었습니다.", res.data);
      })
      .catch(error => {
        console.error("리뷰 업데이트 중 오류가 발생했습니다.", error);
      });
  };

  const isSubmitDisabled = reviewText.trim().length === 0;

  return (
    <ReviewContainer>
      <Header_back />
      <ReviewWrapper>
        <Title>리뷰 등록</Title>
        <ReviewSection
          title="구매하신 상품은 만족하시나요?"
          options={["별로예요", "만족해요"]}
          onSelect={option =>
            setEnjoyStatus(option === "만족해요" ? "YES" : "NO")
          }
        />

        <ReviewSection
          title="색상은 어떤가요?"
          options={["쿨톤", "웜톤"]}
          onSelect={option =>
            setProductPersonalColorStatus(option === "쿨톤" ? "COOL" : "WORM")
          }
        />

        <ReviewSection
          title="사이즈는 어떤가요?"
          options={["작아요", "잘 맞아요", "커요"]}
          onSelect={option => {
            if (option === "작아요") {
              setSizeStatus("SMALL");
            } else if (option === "잘 맞아요") {
              setSizeStatus("FIT");
            } else {
              setSizeStatus("BIG");
            }
          }}
        />

        <ReviewSection
          title="상품 색상은 어떤가요?"
          options={["밝아요", "화면과 같아요", "어두워요"]}
          onSelect={option => {
            if (option === "밝아요") {
              setProductColorStatus("BRIGHT");
            } else if (option === "화면과 같아요") {
              setProductColorStatus("DISPLAY");
            } else {
              setProductColorStatus("DARK");
            }
          }}
        />
        <ReviewForm value={reviewText} onChange={handleReviewTextChange} />
      </ReviewWrapper>
      <FooterContainer>
        <Footer_oneBtn
          text="리뷰 등록하기"
          onClick={submitReview}
          disabled={isSubmitDisabled}
        />
      </FooterContainer>
    </ReviewContainer>
  );
}

export default ReviewUpdatePage;
