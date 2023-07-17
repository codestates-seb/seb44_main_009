import { createContext, useState } from "react";
import LoginInfo from "./LoginInfo";
import SignUpButton from "./SignUpButton";
import UserInfo from "./UserInfo";
import { SingUpContaier } from "./styles/SingUpContaier.styled";
import SignUpModal from "./SignUpModal";
import SignUpSuccessModal from "./SignUpSuccessModal";

// Context >> 생성
export const SingUpContext = createContext();

export default function SignUpProvider({ children }) {
  // http >>  body 부분
  const [signUpData, setSignUpData] = useState({
    korName: "",
    email: "",
    phoneNumber: "",
    nickName: "",
    address: "",
    personalColor: "",
    password: "",
  });

  // State >> 유효성 검사 불통과 시, 모달 오픈
  const [showModal, setShowModal] = useState(false);

  // State >> 회원가입 성공 시, 모달 오픈
  const [successModal, setSuccessModal] = useState(false);

  // State >> 유효성 검사 메세지
  const [validation, setValidation] = useState("");

  // 유효성 검사 정규식 >> 이메일
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  // 유효성 검사 정규식 >> 비밀번호
  const passworedRegEx =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  // 유효성 검사 정규식 >> 전화번호
  const phoneNumberRegEx = /^(010)-[0-9]{3,4}-[0-9]{4}$/;

  // handleEvent >> signUpData(state) 변경
  const handleChange = e =>
    setSignUpData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <SingUpContext.Provider
      value={{
        signUpData,
        setSignUpData,
        handleChange,
        setShowModal,
        emailRegEx,
        passworedRegEx,
        phoneNumberRegEx,
        setValidation,
        validation,
        setSuccessModal,
      }}
    >
      <SingUpContaier>{children}</SingUpContaier>
      {showModal && <SignUpModal />}
      {successModal && <SignUpSuccessModal />}
    </SingUpContext.Provider>
  );
}

export const SignUp = Object.assign(SignUpProvider, {
  LoginInfo: LoginInfo,
  UserInfo: UserInfo,
  SignUpBtn: SignUpButton,
});
