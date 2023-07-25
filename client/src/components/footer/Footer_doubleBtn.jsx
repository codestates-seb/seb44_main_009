import { useState, useEffect } from "react";
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

function Footer_doubleBtn() {
  const [iscount, setCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달의 상태를 관리합니다.

  const cartItems = useRecoilValue(productsState);
  const initialProductId = "1";

  const handleClick = () => {
    if (!isLiked) {
      setCount(prevCount => prevCount + 1);
    } else {
      setCount(prevCount => prevCount - 1);
    }
    setIsLiked(prevIsLiked => !prevIsLiked);
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
    console.log("cartItemCount:", cartItemCount);
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

      <ButtonContainer>
        <IconWrapper onClick={handleClick}>
          <FontAwesomeIcon icon={isLiked ? solidHeart : regularHeart} />
          <CountWrapper>0</CountWrapper>
        </IconWrapper>
        <PurchaseButton onClick={handlePurchaseClick}>구매하기</PurchaseButton>
      </ButtonContainer>
    </>
  );
}

export default Footer_doubleBtn;
