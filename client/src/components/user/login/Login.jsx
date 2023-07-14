import { createContext, useState } from "react";
import Inputs from "./Inputs";
import LinkBtn from "./LinkBtn";
import LoginBtn from "./LoginBtn";
import { LoginContainer } from "./styles/LoginContainer.styled";
import LoginModal from "./LoginModal";

// Context >> 생성
export const LogInContext = createContext();

export default function Login({ children }) {
  // State >> HTTP body 부분
  const [logInData, setLogInData] = useState({ email: "", password: "" });

  // State >> 모달 오픈 여부
  const [showModal, setShowModal] = useState(false);

  // State >> 유효성 검사 메세지
  const [validation, setValidation] = useState("");

  // 유효성 검사 정규식 >> 이메일
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  // 유효성 검사 정규식 >> 비밀번호
  const passworedRegEx =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  // handleEvent >> signUpData(state) 변경
  const handleChange = e =>
    setLogInData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <LogInContext.Provider
      value={{
        handleChange,
        emailRegEx,
        passworedRegEx,
        logInData,
        setShowModal,
        setValidation,
        validation,
      }}
    >
      <LoginContainer>{children}</LoginContainer>
      {showModal && <LoginModal />}
    </LogInContext.Provider>
  );
}

Login.Inputs = Inputs;
Login.LoginBtn = LoginBtn;
Login.LinkBtn = LinkBtn;
