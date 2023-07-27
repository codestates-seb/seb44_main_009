import { useNavigate, Link } from "react-router-dom";
import { Prepare } from "../../image";
import { useState } from "react";
import { ProductImage } from "../attribute/styles/ProdcutImage.styled";
import { ProductDetail } from "../attribute/styles/ProductDetail.styled";
import { ProductView } from "../attribute/styles/ProductView.styled";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { ReviewItemContainer } from "./styles/myreview/ReviewItemContainer.styled";
import { VoteIcon } from "./styles/myreview/StarIcon.styled";
import { ButtonWrapper } from "./styles/myreview/ButtonWrapper.styled";
import { Button } from "./styles/myreview/Button.styled";
import { Score } from "./styles/myreview/Score.styled";
import { deleteReview } from "../../api/orderAPIs";
import { useRecoilValue } from "recoil";
import { auth } from "../../atoms/auth";
import Modal from "../attribute/Modaldev/Modaldev";
import { styled } from "styled-components";

const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
`;
function MyReviewItem({ review }) {
  const { token } = useRecoilValue(auth);
  const navigate = useNavigate();
  // const [, setStoredReviewId] = useState(localStorage.getItem("reviewId"));
  const [showModal, setShowModal] = useState(false);
  const defaultImageUrl = Prepare;

  const deleteReviewItem = async () => {
    try {
      await deleteReview(token, review.reviewId);
      navigate("/mypage");
    } catch (error) {
      console.error("실패");
    }
  };

  // 수정 구현 중
  // const handleEditReviewClick = () => {
  //   localStorage.setItem("reviewId", review.reviewId);
  //   setStoredReviewId(review.reviewId);
  //   navigate("/review/edit");
  // };

  // 수정 모달 창
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  return (
    <ReviewItemContainer>
      <ProductDetail>
        <Link to={`/product-detail/${review.productId}`}>
          <ProductWrapper>
            <ProductImage
              src={review.reviewImageName || defaultImageUrl}
              alt="Product"
            />
            <ProductView>
              <h2>{review.productName}</h2>
              <p>{review.content}</p>
              <VoteIcon icon={faThumbsUp} />
              <Score>{review.vote}</Score>
            </ProductView>
          </ProductWrapper>
        </Link>
        <ButtonWrapper>
          <Button onClick={handleShowModal}>수정</Button>
          {showModal && <Modal onClose={handleHideModal} />}
          <Button onClick={deleteReviewItem}>삭제</Button>
        </ButtonWrapper>
      </ProductDetail>
    </ReviewItemContainer>
  );
}

export default MyReviewItem;
