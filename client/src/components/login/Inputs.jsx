import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import { LoginInputWapper } from "./styles/LoginInputWapper.styled";

export default function Inputs({ children }) {
  return <LoginInputWapper>{children}</LoginInputWapper>;
}

Inputs.Email = EmailInput;
Inputs.Password = PasswordInput;
