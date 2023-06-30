import Login from "../../../components/login/Login";
import { LoginPageWapper } from "./styles/LoginPageWapper.styled";
import { LoginPageTitle } from "./styles/LoginPageTitle";
import { LoginPageContainer } from "./styles/LoginPageContainer.styled";

function LoginPage() {
  return (
    <LoginPageContainer>
      <LoginPageWapper>
        <LoginPageTitle>로그인</LoginPageTitle>
        <Login>
          <Login.Input />
          <Login.LoginBtn />
          <Login.LinkBtn />
        </Login>
      </LoginPageWapper>
    </LoginPageContainer>
  );
}

export default LoginPage;
