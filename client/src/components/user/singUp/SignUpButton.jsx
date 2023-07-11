import { useContext } from "react";
import { SignUpBtn } from "./styles/SignUpBtn.styled";
import { SingUpContext } from "./SignUp";
import { useNavigate } from "react-router-dom";
import { postSignUp } from "../../../api/userAPI";

export default function SignUpButton() {
  // Context >> 사용
  const {
    setShowModal,
    signUpData,
    emailRegEx,
    passworedRegEx,
    phoneNumberRegEx,
    setValidation,
  } = useContext(SingUpContext);

  // Navigate
  const nav = useNavigate();

  // handleEvent >> 유효성 검사 및 showModal(state) 변경
  const handleOpenModal = () => {
    for (let i in signUpData) {
      if (signUpData[i].length === 0) {
        setValidation("미입력한 부분이 없는지 확인해주세요");
        setShowModal(true);
        return;
      }
    }

    if (signUpData.email.match(emailRegEx) === null) {
      setValidation("형식에 맞춰 입력해주세요");
      setShowModal(true);
      return;
    }

    if (signUpData.password.match(passworedRegEx) === null) {
      setValidation("형식에 맞춰 입력해주세요");
      setShowModal(true);
      return;
    }

    if (signUpData.phoneNumber.match(phoneNumberRegEx) === null) {
      setValidation("형식에 맞춰 입력해주세요");
      setShowModal(true);
      return;
    }

    // 유효성 검사 통과 시, api 요청
    (async () => {
      try {
        await postSignUp(signUpData);
        setValidation("회원가입에 성공하였습니다");
        nav("/login");
      } catch (error) {
        setValidation(error.message);
      }
    })();
    setShowModal(true);
  };

  return <SignUpBtn onClick={handleOpenModal}>회원가입</SignUpBtn>;
}
