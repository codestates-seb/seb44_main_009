import { useContext } from "react";
import { SignUpModalBtn } from "./styles/SignUpModalBtn";
import { SignUpModalContainer } from "./styles/SignUpModalContainer";
import { SignUpModalMessage } from "./styles/SignUpModalMessage";
import { SingUpContext } from "./SignUp";

export default function SignUpModal() {
  // Context >> 사용
  const { setShowModal, validation } = useContext(SingUpContext);

  // handleEvent >> showModal(state) 변경
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <SignUpModalContainer>
      <SignUpModalMessage>{validation}</SignUpModalMessage>
      <SignUpModalBtn onClick={handleCloseModal}>닫기</SignUpModalBtn>
    </SignUpModalContainer>
  );
}
