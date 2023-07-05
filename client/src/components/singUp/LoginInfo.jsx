import EmailInput from "./loginInfo/EmailInput";
import PasswordInput from "./loginInfo/PasswordInput";
import { LoginInfoWrapper } from "./styles/LoginInfoWrapper.styled";

export default function LoginInfo({ children }) {
  return <LoginInfoWrapper>{children}</LoginInfoWrapper>;
}

LoginInfo.EmailInput = EmailInput;
LoginInfo.PasswordInput = PasswordInput;
