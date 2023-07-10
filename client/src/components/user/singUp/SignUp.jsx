import { createContext, useState } from "react";
import LoginInfo from "./LoginInfo";
import SignUpButton from "./SignUpButton";
import UserInfo from "./UserInfo";
import { SingUpContaier } from "./styles/SingUpContaier.styled";
import SignUpModal from "./SignUpModal";

export const SingUpContext = createContext();

export default function SignUp({ children }) {
  const [signUpData, setSignUpData] = useState({
    korName: "",
    email: "",
    phoneNumber: "",
    nickName: "",
    address: "",
    personalColor: "",
    password: "",
  });

  const [showModal, setShowModal] = useState(false);

  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  const handleChange = e =>
    setSignUpData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  console.log("----- signUpData", signUpData);

  return (
    <SingUpContext.Provider
      value={{
        signUpData,
        setSignUpData,
        handleChange,
        setShowModal,
        emailRegEx,
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
