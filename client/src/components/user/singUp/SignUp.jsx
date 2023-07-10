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

  const handleChange = e =>
    setSignUpData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  console.log("----- signUpData", signUpData);

  return (
    <SingUpContext.Provider
      value={{ signUpData, setSignUpData, handleChange, setShowModal }}
    >
      <SingUpContaier>{children}</SingUpContaier>
      {showModal && <SignUpModal />}
    </SingUpContext.Provider>
  );
}

SignUp.LoginInfo = LoginInfo;
SignUp.UserInfo = UserInfo;
SignUp.SignUpBtn = SignUpButton;
