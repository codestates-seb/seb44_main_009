import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";

export default function EmailInput() {
  return (
    <>
      <SignUpInputTitle>이메일</SignUpInputTitle>
      <SignUpInput type="email" placeholder="이메일 입력" />
    </>
  );
}
