import Login from "../../../components/login/Login";
import { LoginPageContainer } from "./styles/LoginPageContainer.styled";
import { LoginPageTitle } from "./styles/LoginPageTitle";

function LoginPage() {
  return (
    <LoginPageContainer>
      <LoginPageTitle>로그인</LoginPageTitle>
      <Login>
        <Login.Input />
        <Login.LoginBtn />
        <Login.LinkBtn />
      </Login>
    </LoginPageContainer>
  );
}

export default LoginPage;
