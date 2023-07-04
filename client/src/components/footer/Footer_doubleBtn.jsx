import { ButtonContainer } from "./styles/ButtonContainer.styled";
import { IconWrapper } from "./styles/IconWrapper.styled";
import { PurchaseButton } from "./styles/PurchaseButton.styled";
import { CountWrapper } from "./styles/CountWrapper.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

function Footer_doubleBtn() {
  return (
    <ButtonContainer>
      <IconWrapper>
        <FontAwesomeIcon icon={regularHeart} />
        <CountWrapper>1</CountWrapper>
      </IconWrapper>
      <PurchaseButton>구매하기</PurchaseButton>
    </ButtonContainer>
  );
}

export default Footer_doubleBtn;
