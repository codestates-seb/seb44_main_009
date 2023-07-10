import { useContext } from "react";
import { SignUpBtn } from "./styles/SignUpBtn.styled";
import { SingUpContext } from "./SignUp";

export default function SignUpButton() {
  const { setShowModal } = useContext(SingUpContext);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return <SignUpBtn onClick={handleOpenModal}>회원가입</SignUpBtn>;
}
