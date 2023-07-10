import { createContext, useState } from "react";
import LoginInfo from "./LoginInfo";
import SignUpButton from "./SignUpButton";
import UserInfo from "./UserInfo";
import { SingUpContaier } from "./styles/SingUpContaier.styled";

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

  // console.log("----- signUpData", signUpData);

  return (
    <SingUpContext.Provider value={(signUpData, setSignUpData)}>
      <SingUpContaier>{children}</SingUpContaier>
    </SingUpContext.Provider>
  );
}

SignUp.LoginInfo = LoginInfo;
SignUp.UserInfo = UserInfo;
SignUp.SignUpBtn = SignUpButton;
