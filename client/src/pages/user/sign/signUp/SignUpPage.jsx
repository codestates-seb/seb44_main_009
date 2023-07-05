import Header from "../../../../components/header/Header";
import LoginInfo from "../../../../components/user/sign/signUp/loginInfo/LoginInfo";
import SignUp from "../../../../components/user/sign/signUp/SignUp";
import UserInfo from "../../../../components/user/sign/signUp/userInfo/UserInfo";
import { SignUpPageContainer } from "./styles/SignUpPageContainer.styled";
import { SignUpPageTitle } from "./styles/SignUpPageTitle.styled";
import { SignUpPageWrapper } from "./styles/SignUpPageWrapper.styled";

function SignUpPage() {
  return (
    <SignUpPageContainer>
      <Header />
      <SignUpPageWrapper>
        <SignUpPageTitle>회원가입</SignUpPageTitle>
        <SignUp>
          <SignUp.LoginInfo>
            <LoginInfo.EmailInput />
            <LoginInfo.PasswordInput />
          </SignUp.LoginInfo>
          <SignUp.UserInfo>
            <UserInfo.NameInput />
            <UserInfo.NickNameInput />
            <UserInfo.PhoneNumberInput />
            <UserInfo.AddressInput />
          </SignUp.UserInfo>
          <SignUp.SignUpBtn />
        </SignUp>
      </SignUpPageWrapper>
    </SignUpPageContainer>
  );
}

export default SignUpPage;
