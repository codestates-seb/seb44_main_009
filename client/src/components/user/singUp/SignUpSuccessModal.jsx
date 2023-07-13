import { useContext } from "react";
import { SignUpModalBtn } from "./styles/SignUpModalBtn";
import { SignUpModalContainer } from "./styles/SignUpModalContainer";
import { SignUpModalMessage } from "./styles/SignUpModalMessage";
import { SingUpContext } from "./SignUp";
import { useNavigate } from "react-router-dom";

export default function SignUpSuccessModal() {
  // Context >> 사용
  const { setSuccessModal, validation } = useContext(SingUpContext);

  // Navigate
  const nav = useNavigate();

  // handleEvent >> showModal(state) 변경
  const handleCloseModal = () => {
    setSuccessModal(false);
    nav("/login");
  };

  return (
    <SignUpModalContainer>
      <SignUpModalMessage>{validation}</SignUpModalMessage>
      <SignUpModalBtn onClick={handleCloseModal}>닫기</SignUpModalBtn>
    </SignUpModalContainer>
  );
}
