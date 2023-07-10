import { useContext, useEffect, useState } from "react";
import { SignUpModalBtn } from "./styles/SignUpModalBtn";
import { SignUpModalContainer } from "./styles/SignUpModalContainer";
import { SignUpModalMessage } from "./styles/SignUpModalMessage";
import { SingUpContext } from "./SignUp";

export default function SignUpModal() {
  const { setShowModal, signUpData, emailRegEx, passworedRegEx } =
    useContext(SingUpContext);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [message, setMessage] = useState("");

  useEffect(() => {
    for (let i in signUpData) {
      if (signUpData[i].length === 0) {
        setMessage("미입력한 부분이 없는지 확인해주세요");
        return;
      }
    }

    if (signUpData.email.match(emailRegEx) === null) {
      setMessage("형식에 맞춰 입력해주세요");
      return;
    }

    if (signUpData.password.match(passworedRegEx) === null) {
      setMessage("형식에 맞춰 입력해주세요");
      return;
    }

    setMessage("");
  }, [signUpData]);

  return (
    <SignUpModalContainer>
      <SignUpModalMessage>{message}</SignUpModalMessage>
      <SignUpModalBtn onClick={handleCloseModal}>닫기</SignUpModalBtn>
    </SignUpModalContainer>
  );
}
