import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";

export default function PasswordInput() {
  return (
    <>
      <SignUpInputTitle>비밀번호</SignUpInputTitle>
      <SignUpInput type="password" placeholder="비밀번호 입력" />
      <ValidationMessage>유효성 메세지</ValidationMessage>
    </>
  );
}
