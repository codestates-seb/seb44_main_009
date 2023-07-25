import Login from "../../../../components/user/login/Login";
import Header from "../../../../components/header/Header";
import Inputs from "../../../../components/user/login/Inputs";
import {
  LoginPageContainer,
  LoginPageTitle,
  LoginPageWrapper,
} from "./LoginPage.styled";

function LoginPage() {
  return (
    <LoginPageContainer>
      <Header />
      <LoginPageWrapper>
        <LoginPageTitle>로그인</LoginPageTitle>
        <Login>
          <Login.Inputs>
            <Inputs.Email />
            <Inputs.Password />
          </Login.Inputs>
          <Login.LoginBtn />
          <Login.LinkBtn />
        </Login>
      </LoginPageWrapper>
    </LoginPageContainer>
  );
}

export default LoginPage;
