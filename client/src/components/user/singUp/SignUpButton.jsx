import { useContext } from "react";
import { SignUpBtn } from "./styles/SignUpBtn.styled";
import { SingUpContext } from "./SignUp";
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
    setSuccessModal,
  } = useContext(SingUpContext);

  // handleEvent >> 유효성 검사 및 showModal(state) 변경
  const handleOpenModal = () => {
    // for (let i in signUpData) {
    //   if (signUpData[i].length === 0) {
    //     setValidation("미입력한 부분이 없는지 확인해주세요");
    //     setShowModal(true);
    //     return;
    //   }
    // }

    if (Object.values(signUpData).some(data => !data)) {
      setValidation("미입력한 부분이 없는지 확인해주세요.");
      setShowModal(true);
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
        setSuccessModal(true);
        setShowModal(true);
      } catch (error) {
        setValidation(error.message);
      }
    })();
  };

  return <SignUpBtn onClick={handleOpenModal}>회원가입</SignUpBtn>;
}
