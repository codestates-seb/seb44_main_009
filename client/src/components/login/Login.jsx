import Input from "./Input";
import LinkBtn from "./LinkBtn";
import LoginBtn from "./LoginBtn";
import { LoginContainer } from "./styles/LoginContainer.styled";

export default function Login({ children }) {
  return <LoginContainer>{children}</LoginContainer>;
}

Login.Input = Input;
Login.LoginBtn = LoginBtn;
Login.LinkBtn = LinkBtn;
