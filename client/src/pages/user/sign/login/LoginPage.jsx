import Login from "../../../../components/login/Login";
import { LoginPageWrapper } from "./styles/LoginPageWrapper.styled";
import { LoginPageTitle } from "./styles/LoginPageTitle";
import { LoginPageContainer } from "./styles/LoginPageContainer.styled";
import Inputs from "../../../../components/user/sign/login/input/Inputs";
import Header from "../../../../components/header/Header";

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
