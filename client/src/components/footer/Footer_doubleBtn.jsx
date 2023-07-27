import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ButtonContainer } from "./styles/ButtonContainer.styled";
import { IconWrapper } from "./styles/IconWrapper.styled";
import { PurchaseButton } from "./styles/PurchaseButton.styled";
import { CountWrapper } from "./styles/CountWrapper.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { BuyFooterModal } from "./BuyFooterModal";
import { useRecoilValue } from "recoil";
import { productsState } from "../../atoms/product";
import { updateLike, deleteLike } from "../../api/orderAPIs";
import { auth } from "../../atoms/auth";
import { styled } from "styled-components";

const LikedMessage = styled.div`
  background-color: #9e9e9e;
  color: #fff;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 1s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

function Footer_doubleBtn() {
  const { isLogin, token } = useRecoilValue(auth);
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  // 찜 메시지 모달 상태
  const [showLikedMessage, setShowLikedMessage] = useState(false);
  const [likedMessage, setLikedMessage] = useState("");

  const [iscount, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달의 상태를 관리합니다.

  const cartItems = useRecoilValue(productsState);
  const initialProductId = "1";
  const { productId } = useParams();

  useEffect(() => {
    const initialIsLiked = localStorage.getItem("isLiked");
    setIsLiked(initialIsLiked === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("isLiked", isLiked);
  }, [isLiked]);

  // 찜 생성 & 삭제
  const handleLikeBtn = async () => {
    try {
      if (isLogin && token) {
        const productData = {
          productId: productId,
        };
        if (isLiked) {
          await deleteLike(token, productData);
          setLikeCount(prevCount => prevCount - 1);
          setLikedMessage("찜한 상품에서 삭제되었습니다.");
        } else {
          await updateLike(token, productData);
          setLikeCount(prevCount => prevCount + 1);
          setLikedMessage("찜한 상품에 추가했어요");
        }
        setIsLiked(prevIsLiked => !prevIsLiked);
        setShowLikedMessage(true);
        setTimeout(() => {
          setShowLikedMessage(false);
        }, 3000);
      } else {
        alert("로그인이 필요합니다.");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePurchaseClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const cartItemCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0,
    );
    setCount(cartItemCount);
  }, [cartItems]);

  return (
    <>
      {isModalOpen && (
        <BuyFooterModal
          closeModal={closeModal}
          productId={initialProductId}
          quantity={iscount}
        />
      )}
      {showLikedMessage && <LikedMessage>{likedMessage}</LikedMessage>}
      <ButtonContainer>
        <IconWrapper onClick={handleLikeBtn}>
          <FontAwesomeIcon icon={isLiked ? solidHeart : regularHeart} />
          <CountWrapper>{likeCount}</CountWrapper>
        </IconWrapper>
        <PurchaseButton onClick={handlePurchaseClick}>구매하기</PurchaseButton>
      </ButtonContainer>
    </>
  );
}

export default Footer_doubleBtn;
