import { createContext, useState } from "react";
import LoginInfo from "./LoginInfo";
import SignUpButton from "./SignUpButton";
import UserInfo from "./UserInfo";
import { SingUpContaier } from "./styles/SingUpContaier.styled";
import SignUpModal from "./SignUpModal";

// Context >> 생성
export const SingUpContext = createContext();

export default function SignUp({ children }) {
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

  // State >> 모달 오픈 여부
  const [showModal, setShowModal] = useState(false);

  // 유효성 검사 정규식 >> 이메일
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  // 유효성 검사 정규식 >> 비밀번호
  const passworedRegEx =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  // handleEvent >> signUpData(state) 변경
  const handleChange = e =>
    setSignUpData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  // console.log("----- signUpData", signUpData);

  return (
    <SingUpContext.Provider
      value={{
        signUpData,
        setSignUpData,
        handleChange,
        setShowModal,
        emailRegEx,
        passworedRegEx,
      }}
    >
      <SingUpContaier>{children}</SingUpContaier>
      {showModal && <SignUpModal />}
    </SingUpContext.Provider>
  );
}

SignUp.LoginInfo = LoginInfo;
SignUp.UserInfo = UserInfo;
SignUp.SignUpBtn = SignUpButton;
