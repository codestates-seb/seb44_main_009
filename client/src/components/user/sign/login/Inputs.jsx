import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import { LoginInputWrapper } from "./styles/LoginInputWrapper.styled";

export default function Inputs({ children }) {
  return <LoginInputWrapper>{children}</LoginInputWrapper>;
}

Inputs.Email = EmailInput;
Inputs.Password = PasswordInput;
