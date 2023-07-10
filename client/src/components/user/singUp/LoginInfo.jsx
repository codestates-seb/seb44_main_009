import { createContext, useContext } from "react";
import EmailInput from "./loginInfo/EmailInput";
import PasswordInput from "./loginInfo/PasswordInput";
import { LoginInfoWrapper } from "./styles/LoginInfoWrapper.styled";
import { SingUpContext } from "./SignUp";

export const LoginInfoContext = createContext();

export default function LoginInfo({ children }) {
  const setSignUpData = useContext(SingUpContext);

  const handleChange = e =>
    setSignUpData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <LoginInfoContext.Provider value={handleChange}>
      <LoginInfoWrapper>{children}</LoginInfoWrapper>
    </LoginInfoContext.Provider>
  );
}

LoginInfo.EmailInput = EmailInput;
LoginInfo.PasswordInput = PasswordInput;
