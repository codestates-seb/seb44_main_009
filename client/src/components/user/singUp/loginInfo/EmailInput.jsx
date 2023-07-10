import { useContext } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";
import { SingUpContext } from "../SignUp";

export default function EmailInput() {
  const setSignUpData = useContext(SingUpContext);

  const handleChange = e =>
    setSignUpData(prev => ({ ...prev, email: e.target.value }));

  return (
    <>
      <SignUpInputTitle>이메일</SignUpInputTitle>
      <SignUpInput
        type="email"
        placeholder="이메일 입력"
        onChange={handleChange}
      />
      <ValidationMessage>유효성 메세지</ValidationMessage>
    </>
  );
}
