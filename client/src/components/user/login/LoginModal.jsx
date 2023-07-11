import { useContext } from "react";
import { LoginModalContainer } from "./styles/LoginModalContainer.styled";
import { LoginModalMessage } from "./styles/LoginModalMessage.styled";
import { LoginModalBtn } from "./styles/LoginModalBtn.styled";
import { LogInContext } from "./Login";

export default function LoginModal() {
  // Context >> 사용
  const { setShowModal, validation } = useContext(LogInContext);

  // handleEvent >> showModal(state) 변경
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <LoginModalContainer>
      <LoginModalMessage>{validation}</LoginModalMessage>
      <LoginModalBtn onClick={handleCloseModal}>닫기</LoginModalBtn>
    </LoginModalContainer>
  );
}
