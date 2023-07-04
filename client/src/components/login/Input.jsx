import { LoginInput } from "./styles/LoginInput.styled";
import { LoginInputTitle } from "./styles/LoginInputTitle.styled";
import { LoginInputWapper } from "./styles/LoginInputWapper.styled";

function Input() {
  return (
    <LoginInputWapper>
      <LoginInputTitle>이메일</LoginInputTitle>
      <LoginInput type="email" placeholder="이메일 입력" />
      <LoginInputTitle>비밀번호</LoginInputTitle>
      <LoginInput type="password" placeholder="비밀번호 입력" />
    </LoginInputWapper>
  );
}

export default Input;
