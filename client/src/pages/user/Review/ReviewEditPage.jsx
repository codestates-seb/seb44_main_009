import { useState, useEffect } from "react";
import ReviewForm from "../../../components/review/ReviewForm";
import Header_back from "../../../components/header/Header_back";
import Footer_oneBtn from "../../../components/footer/Footer_oneBtn";
import ReviewSection from "../../../components/review/ReviewSection";
import { ReviewContainer } from "./styles/ReviewContainer.styled";
import { ReviewWrapper } from "./styles/ReviewWrapper.styled";
import { Title } from "./styles/Title.styled";
import { FooterContainer } from "./styles/FooterContainer.styled";
import { findReview, editReview } from "../../../api/orderAPIs";
import { useRecoilValue } from "recoil";
import { auth } from "../../../atoms/auth";

function ReviewEditPage() {
  const { token } = useRecoilValue(auth);
  const [enjoyStatus, setEnjoyStatus] = useState("");
  const [productPersonalColorStatus, setProductPersonalColorStatus] =
    useState("");
  const [sizeStatus, setSizeStatus] = useState("");
  const [productColorStatus, setProductColorStatus] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [imageFile, setImageFile] = useState(null);

  // const [enjoyOption, setEnjoyOption] = useState("");
  // const [personalColorOption, setPersonalColorOption] = useState("");
  // const [sizeOption, setSizeOption] = useState("");
  // const [productColorOption, setProductColorOption] = useState("");

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
  //   const storedReviewId = localStorage.getItem("reviewId");
  //   setReviewId(storedReviewId);
  //   console.log("Stored reviewId:", storedReviewId);
  // }, []);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const storedReviewId = localStorage.getItem("reviewId");
        if (!storedReviewId) {
          console.error("Review ID not found in localStorage.");
          return;
        }

        const data = await findReview(token, storedReviewId);
        console.log(data);
        setEnjoyStatus(data.data.enjoyStatus);
        setProductPersonalColorStatus(data.data.productPersonalColorStatus);
        setSizeStatus(data.data.sizeStatus);
        setProductColorStatus(data.data.productColorStatus);
        setReviewText(data.data.content);
        console.log(data.data.content);
      } catch (error) {
        console.error("Error fetching review:", error);
      }
    };

    fetchReview();
  }, []);

  const handleReviewTextChange = e => {
    const value = e.target.value;
    setReviewText(value);
  };

  const handleImageFileChange = file => {
    setImageFile(file);
  };

  // 리뷰 등록
  const EditReview = async () => {
    try {
      const reviewData = {
        enjoyStatus: enjoyStatus,
        productPersonalColorStatus: productPersonalColorStatus,
        sizeStatus: sizeStatus,
        productColorStatus: productColorStatus,
        content: reviewText,
      };

      const formData = new FormData();
      formData.append(
        "requestBody",
        new Blob([JSON.stringify(reviewData)], {
          type: "application/json",
        }),
      );
      formData.append("image", imageFile);

      const response = await editReview(token, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      localStorage.setItem("reviewResponseData", JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  const reviewResponseData = localStorage.getItem("reviewResponseData");

  if (reviewResponseData) {
    JSON.parse(reviewResponseData);
  }

  // const isSubmitDisabled = reviewText.trim().length === 0;

  // 콘솔 찍어 봤던 것
  useEffect(() => {}, [enjoyStatus]);

  useEffect(() => {}, [productPersonalColorStatus]);

  useEffect(() => {}, [sizeStatus]);

  useEffect(() => {}, [productColorStatus]);

  return (
    <ReviewContainer>
      <Header_back />
      <ReviewWrapper>
        <Title>리뷰 등록</Title>
        <ReviewSection
          title="구매하신 상품은 만족하시나요?"
          options={["별로예요", "만족해요"]}
          selectedOption={enjoyStatus === "YES" ? "만족해요" : "별로예요"}
          onSelect={option =>
            setEnjoyStatus(option === "만족해요" ? "YES" : "NO")
          }
        />
        <ReviewSection
          title="색상은 어떤가요?"
          options={["쿨톤", "웜톤"]}
          selectedOption={
            productPersonalColorStatus === "COOL" ? "쿨톤" : "웜톤"
          }
          onSelect={option =>
            setProductPersonalColorStatus(option === "쿨톤" ? "COOL" : "WARM")
          }
        />
        <ReviewSection
          title="사이즈는 어떤가요?"
          options={["작아요", "잘 맞아요", "커요"]}
          selectedOption={
            sizeStatus === "SMALL"
              ? "작아요"
              : sizeStatus === "FIT"
              ? "잘 맞아요"
              : "커요"
          }
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
          selectedOption={
            productColorStatus === "BRIGHT"
              ? "밝아요"
              : productColorStatus === "DISPLAY"
              ? "화면과 같아요"
              : "어두워요"
          }
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

        <ReviewForm
          value={reviewText}
          onChange={handleReviewTextChange}
          onImageFileChange={handleImageFileChange}
        />
      </ReviewWrapper>
      <FooterContainer>
        <Footer_oneBtn
          text="리뷰 수정하기"
          onClick={EditReview}
          // disabled={isSubmitDisabled}
        />
      </FooterContainer>
    </ReviewContainer>
  );
}

export default ReviewEditPage;
