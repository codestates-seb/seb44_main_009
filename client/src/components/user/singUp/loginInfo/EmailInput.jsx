import { useContext } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";
import { LoginInfoContext } from "../LoginInfo";

export default function EmailInput() {
  const handleChange = useContext(LoginInfoContext);

  return (
    <>
      <SignUpInputTitle>이메일</SignUpInputTitle>
      <SignUpInput
        type="email"
        placeholder="이메일 입력"
        onChange={handleChange}
        name="email"
      />
      <ValidationMessage>유효성 메세지</ValidationMessage>
    </>
  );
}
