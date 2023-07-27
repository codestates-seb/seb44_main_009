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
import { useParams, Link } from "react-router-dom";

function ReviewUpdatePage() {
  const { token } = useRecoilValue(auth);
  const [enjoyStatus, setEnjoyStatus] = useState("");
  const [productPersonalColorStatus, setProductPersonalColorStatus] =
    useState("");
  const [sizeStatus, setSizeStatus] = useState("");
  const [productColorStatus, setProductColorStatus] = useState("");
  const [reviewText, setReviewText] = useState("");

  const { orderId, productId } = useParams();

  const [imageFile, setImageFile] = useState(null);
  // const [orderId, setOrderId] = useState(null);
  // const [productId, setProductId] = useState(null);

  // useEffect(() => {
  //   const orderResponseData = JSON.parse(
  //     localStorage.getItem("orderResponseData"),
  //   );
  //   if (orderResponseData) {
  //     const { orderId } = orderResponseData;
  //     const productId = orderResponseData.cartProductList[0].productId;

  //     setOrderId(orderId);
  //     setProductId(productId);
  //   } else {
  //     console.log("Invalid data format or missing data.");
  //   }
  // }, []);

  const handleReviewTextChange = e => {
    const value = e.target.value;
    setReviewText(value);
  };

  const handleImageFileChange = file => {
    if (file) {
      setImageFile(file);
    } else {
      const emptyFile = new File([], "empty.jpg", { type: "image/jpeg" });
      setImageFile(emptyFile);
    }
  };

  // 리뷰 등록
  const submitReview = async () => {
    try {
      const reviewData = {
        enjoyStatus: enjoyStatus,
        productPersonalColorStatus: productPersonalColorStatus,
        sizeStatus: sizeStatus,
        productColorStatus: productColorStatus,
        content: reviewText,
      };

      // const response = await updateReview(
      //   token,
      //   reviewData,
      //   orderId,
      //   productId,
      // );
      // console.log(response.data);

      const formData = new FormData();
      formData.append(
        "requestBody",
        new Blob([JSON.stringify(reviewData)], {
          type: "application/json",
        }),
      );
      if (imageFile) {
        formData.append("image", imageFile);
      } else {
        const emptyFile = new File([], "empty.jpg", { type: "image/jpeg" });
        formData.append("image", emptyFile);
      }
      formData.append("orderId", orderId);
      formData.append("productId", productId);

      const response = await updateReview(token, formData, {
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

  const isSubmitDisabled = reviewText.trim().length === 0;

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
          selectedOption={enjoyStatus}
          onSelect={option => {
            setEnjoyStatus(option === "만족해요" ? "YES" : "NO");
          }}
        />

        <ReviewSection
          title="색상은 어떤가요?"
          options={["쿨톤", "웜톤"]}
          onSelect={option => {
            setProductPersonalColorStatus(option === "쿨톤" ? "COOL" : "WARM");
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
        <ReviewForm
          value={reviewText}
          onChange={handleReviewTextChange}
          onImageFileChange={handleImageFileChange}
        />
      </ReviewWrapper>
      <FooterContainer>
        <Link to="/mypage">
          <Footer_oneBtn
            text="리뷰 등록하기"
            onClick={submitReview}
            disabled={isSubmitDisabled}
          />
        </Link>
      </FooterContainer>
    </ReviewContainer>
  );
}

export default ReviewUpdatePage;
