import Login from "../../../../components/user/login/Login";
import Header from "../../../../components/header/Header";
import {
  LoginInputWrapper,
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
          <LoginInputWrapper>
            <Login.Email />
            <Login.Password />
          </LoginInputWrapper>
          <Login.LoginBtn />
          <Login.LinkBtn />
        </Login>
      </LoginPageWrapper>
    </LoginPageContainer>
  );
}

export default LoginPage;
