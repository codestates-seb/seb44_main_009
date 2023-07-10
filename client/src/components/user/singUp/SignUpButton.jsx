import { useContext } from "react";
import { SignUpBtn } from "./styles/SignUpBtn.styled";
import { SingUpContext } from "./SignUp";

export default function SignUpButton() {
  // Context >> 사용
  const { setShowModal } = useContext(SingUpContext);

  // handleEvent >> showModal(state) 변경
  const handleOpenModal = () => {
    setShowModal(true);
  };

  return <SignUpBtn onClick={handleOpenModal}>회원가입</SignUpBtn>;
}
