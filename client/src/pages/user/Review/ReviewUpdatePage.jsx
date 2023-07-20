import { useState, useEffect } from "react";
import ReviewForm from "../../../components/review/ReviewForm";
import Header_back from "../../../components/header/Header_back";
import Footer_oneBtn from "../../../components/footer/Footer_oneBtn";
import ReviewSection from "../../../components/review/ReviewSection";
import { ReviewContainer } from "./styles/ReviewContainer.styled";
import { ReviewWrapper } from "./styles/ReviewWrapper.styled";
import { Title } from "./styles/Title.styled";
import { FooterContainer } from "./styles/FooterContainer.styled";
import { useRecoilValue } from "recoil";
import { auth } from "../../../atoms/auth";
import { updateReview } from "../../../api/orderAPIs";

function ReviewUpdatePage() {
  const { token } = useRecoilValue(auth);
  const [enjoyStatus, setEnjoyStatus] = useState("");
  const [productPersonalColorStatus, setProductPersonalColorStatus] =
    useState("");
  const [sizeStatus, setSizeStatus] = useState("");
  const [productColorStatus, setProductColorStatus] = useState("");
  const [reviewText, setReviewText] = useState("");

  const handleReviewTextChange = e => {
    const value = e.target.value;
    setReviewText(value);
    console.log(value);
  };

  // 리뷰 등록
  const submitReview = async () => {
    try {
      const reviewData = {
        enjoyStatus,
        productPersonalColorStatus,
        sizeStatus,
        productColorStatus,
        content: reviewText,
      };

      const response = await updateReview(token, reviewData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const isSubmitDisabled = reviewText.trim().length === 0;

  useEffect(() => {
    if (enjoyStatus !== "") {
      console.log("enjoyStatus:", enjoyStatus);
    }
  }, [enjoyStatus]);

  useEffect(() => {
    if (productPersonalColorStatus !== "") {
      console.log("productPersonalColorStatus:", productPersonalColorStatus);
    }
  }, [productPersonalColorStatus]);

  useEffect(() => {
    if (sizeStatus !== "") {
      console.log("sizeStatus:", sizeStatus);
    }
  }, [sizeStatus]);

  useEffect(() => {
    if (productColorStatus !== "") {
      console.log("productColorStatus:", productColorStatus);
    }
  }, [productColorStatus]);

  return (
    <ReviewContainer>
      <Header_back />
      <ReviewWrapper>
        <Title>리뷰 등록</Title>
        <ReviewSection
          title="구매하신 상품은 만족하시나요?"
          options={["별로예요", "만족해요"]}
          onSelect={option => {
            setEnjoyStatus(option === "만족해요" ? "YES" : "NO");
          }}
        />

        <ReviewSection
          title="색상은 어떤가요?"
          options={["쿨톤", "웜톤"]}
          onSelect={option => {
            setProductPersonalColorStatus(option === "쿨톤" ? "COOL" : "WORM");
          }}
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
