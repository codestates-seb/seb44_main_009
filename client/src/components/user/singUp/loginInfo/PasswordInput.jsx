import { useContext } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";
import { SingUpContext } from "../SignUp";

export default function PasswordInput() {
  const handleChange = useContext(SingUpContext);

  return (
    <>
      <SignUpInputTitle>비밀번호</SignUpInputTitle>
      <SignUpInput
        type="password"
        placeholder="비밀번호 입력"
        onChange={handleChange}
        name="password"
      />
      <ValidationMessage>유효성 메세지</ValidationMessage>
    </>
  );
}
