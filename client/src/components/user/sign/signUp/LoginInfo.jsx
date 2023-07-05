import EmailInput from "../../../singUp/loginInfo/EmailInput";
import PasswordInput from "../../../singUp/loginInfo/PasswordInput";
import { LoginInfoWrapper } from "../../../singUp/styles/LoginInfoWrapper.styled";

export default function LoginInfo({ children }) {
  return <LoginInfoWrapper>{children}</LoginInfoWrapper>;
}

LoginInfo.EmailInput = EmailInput;
LoginInfo.PasswordInput = PasswordInput;
