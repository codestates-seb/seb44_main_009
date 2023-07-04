import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";

export default function PasswordInput() {
  return (
    <>
      <SignUpInputTitle>비밀번호</SignUpInputTitle>
      <SignUpInput type="password" placeholder="비밀번호 입력" />
    </>
  );
}
