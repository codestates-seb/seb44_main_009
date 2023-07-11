import { useState } from "react";
import { ButtonContainer } from "./styles/ButtonContainer.styled";
import { IconWrapper } from "./styles/IconWrapper.styled";
import { PurchaseButton } from "./styles/PurchaseButton.styled";
import { CountWrapper } from "./styles/CountWrapper.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

function Footer_doubleBtn() {
  const [count, setCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    if (!isLiked) {
      setCount(prevCount => prevCount + 1);
    } else {
      setCount(prevCount => prevCount - 1);
    }
    setIsLiked(prevIsLiked => !prevIsLiked);
  };

  return (
    <ButtonContainer>
      <IconWrapper onClick={handleClick}>
        <FontAwesomeIcon icon={isLiked ? solidHeart : regularHeart} />
        <CountWrapper>{count}</CountWrapper>
      </IconWrapper>
      <PurchaseButton>구매하기</PurchaseButton>
    </ButtonContainer>
  );
}

export default Footer_doubleBtn;
