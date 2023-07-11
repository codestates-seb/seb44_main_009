import { useContext } from "react";
import { SingUpContext } from "./SignUp";
import { LoginModalContainer } from "./styles/LoginModalContainer.styled";
import { LoginModalMessage } from "./styles/LoginModalMessage.styled";
import { LoginModalBtn } from "./styles/LoginModalBtn.styled";

export default function LoginModal() {
  // Context >> 사용
  const { setShowModal, validation } = useContext(SingUpContext);

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
