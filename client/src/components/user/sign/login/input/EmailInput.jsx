import { LoginInput } from "./styles/LoginInput.styled";
import { LoginInputTitle } from "./styles/LoginInputTitle.styled";

function EmailInput() {
  return (
    <>
      <LoginInputTitle>이메일</LoginInputTitle>
      <LoginInput type="email" placeholder="이메일 입력" />
    </>
  );
}

export default EmailInput;
