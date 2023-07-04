import LoninInfo from "./LoginInfo";
import SignUpButton from "./SignUpButton";
import UserInfo from "./UserInfo";
import { SingUpContaier } from "./styles/SingUpContaier.styled";

export default function SignUp({ children }) {
  return <SingUpContaier>{children}</SingUpContaier>;
}

SignUp.LoninInfo = LoninInfo;
SignUp.UserInfo = UserInfo;
SignUp.SignUpBtn = SignUpButton;
