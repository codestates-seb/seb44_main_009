import { useContext, useEffect, useState } from "react";
import { SignUpModalBtn } from "./styles/SignUpModalBtn";
import { SignUpModalContainer } from "./styles/SignUpModalContainer";
import { SignUpModalMessage } from "./styles/SignUpModalMessage";
import { SingUpContext } from "./SignUp";
import { postSignUp } from "../../../api/userAPI";
import { useNavigate } from "react-router-dom";

export default function SignUpModal() {
  // Context >> 사용
  const {
    setShowModal,
    signUpData,
    emailRegEx,
    passworedRegEx,
    phoneNumberRegEx,
  } = useContext(SingUpContext);

  // State >> 유효성 검사에 따른 메세지
  const [message, setMessage] = useState("");

  const nav = useNavigate();

  // handleEvent >> showModal(state) 변경
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Effect >> 유효성 검사에 따른 message(state) 변경
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

    if (signUpData.phoneNumber.match(phoneNumberRegEx) === null) {
      setMessage("형식에 맞춰 입력해주세요");
      return;
    }

    // 유효성 검사 통과 시, api 요청
    (async () => {
      try {
        await postSignUp(signUpData);
        setMessage("회원가입에 성공하였습니다");
        nav("/login");
      } catch (error) {
        setMessage(error.message);
      }
    })();
  }, [signUpData]);

  return (
    <SignUpModalContainer>
      <SignUpModalMessage>{message}</SignUpModalMessage>
      <SignUpModalBtn onClick={handleCloseModal}>닫기</SignUpModalBtn>
    </SignUpModalContainer>
  );
}
