import LoginInfo from "./loginInfo/LoginInfo";
import SignUpButton from "./button/SignUpButton";
import UserInfo from "./userInfo/UserInfo";
import { SingUpContaier } from "./styles/SingUpContaier.styled";

export default function SignUp({ children }) {
  return <SingUpContaier>{children}</SingUpContaier>;
}

SignUp.LoginInfo = LoginInfo;
SignUp.UserInfo = UserInfo;
SignUp.SignUpBtn = SignUpButton;
