import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import { LoginInfoWrapper } from "./styles/LoginInfoWrapper.styled";

export default function LoginInfo({ children }) {
  return <LoginInfoWrapper>{children}</LoginInfoWrapper>;
}

LoginInfo.EmailInput = EmailInput;
LoginInfo.PasswordInput = PasswordInput;
