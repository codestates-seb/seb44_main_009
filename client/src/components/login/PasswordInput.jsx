import { LoginInput } from "./styles/LoginInput.styled";
import { LoginInputTitle } from "./styles/LoginInputTitle.styled";

export default function PasswordInput() {
  return (
    <>
      <LoginInputTitle>비밀번호</LoginInputTitle>
      <LoginInput type="password" placeholder="비밀번호 입력" />
    </>
  );
}
