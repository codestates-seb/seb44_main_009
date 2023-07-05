import Inputs from "./Inputs";
import LinkBtn from "./LinkBtn";
import LoginBtn from "./LoginBtn";
import { LoginContainer } from "./styles/LoginContainer.styled";

export default function Login({ children }) {
  return <LoginContainer>{children}</LoginContainer>;
}

Login.Inputs = Inputs;
Login.LoginBtn = LoginBtn;
Login.LinkBtn = LinkBtn;
