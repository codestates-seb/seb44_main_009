import Login from "../../../components/login/Login";
import { LoginPageContainer } from "./styles/LoginPageContainer.styled";
import { Title } from "./styles/Title";

function LoginPage() {
  return (
    <LoginPageContainer>
      <Title>로그인</Title>
      <Login>
        <Login.Input />
        <Login.LoginBtn>로그인</Login.LoginBtn>
        <Login.LinkBtn>아이디 찾기</Login.LinkBtn>
        <Login.LinkBtn>비밀번호 찾기</Login.LinkBtn>
        <Login.LinkBtn>회원가입</Login.LinkBtn>
      </Login>
    </LoginPageContainer>
  );
}

export default LoginPage;
