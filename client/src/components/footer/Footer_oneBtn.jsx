import { ButtonContainer } from "./styles/ButtonContainer.styled";
import { Button } from "./styles/Button.styled";

// 각 페이지마다 텍스트 달라질 경우, <Footer_oneBtn text="주문하기" />; 텍스트 넣기
function Footer_oneBtn({ text, onClick }) {
  // 클릭시, 클릭만 되게 하고 각 페이지마다 동작 다르게 하기
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <ButtonContainer>
      <Button onClick={handleClick}>{text}</Button>
    </ButtonContainer>
  );
}

export default Footer_oneBtn;
