import LoginInfo from "../../../../components/user/singUp/LoginInfo";
import SignUp from "../../../../components/user/singUp/SignUp";
import UserInfo from "../../../../components/user/singUp/UserInfo";
import { SignUpPageContainer } from "./styles/SignUpPageContainer.styled";
import { SignUpPageTitle } from "./styles/SignUpPageTitle.styled";
import { SignUpPageWrapper } from "./styles/SignUpPageWrapper.styled";
import Header from "../../../../components/header/Header";

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
            <UserInfo.PersonalColorSelect />
          </SignUp.UserInfo>
          <SignUp.SignUpBtn />
        </SignUp>
      </SignUpPageWrapper>
    </SignUpPageContainer>
  );
}

export default SignUpPage;
