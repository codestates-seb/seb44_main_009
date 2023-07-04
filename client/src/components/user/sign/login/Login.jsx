import Inputs from "./input/Inputs";
import LinkBtn from "./button/LinkBtn";
import LoginBtn from "./button/LoginBtn";
import { LoginContainer } from "./styles/LoginContainer.styled";

export default function Login({ children }) {
  return <LoginContainer>{children}</LoginContainer>;
}

Login.Inputs = Inputs;
Login.LoginBtn = LoginBtn;
Login.LinkBtn = LinkBtn;
