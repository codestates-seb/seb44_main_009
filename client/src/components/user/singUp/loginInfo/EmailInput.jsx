import { useContext } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";
import { LoginInfoContext } from "../LoginInfo";
import { SignUpInputTitleWrapper } from "../styles/SignUpInputTitleWrapper.styled";

export default function EmailInput() {
  const handleChange = useContext(LoginInfoContext);

  return (
    <>
      <SignUpInputTitleWrapper>
        <SignUpInputTitle>이메일</SignUpInputTitle>
        <ValidationMessage>유효성 메세지</ValidationMessage>
      </SignUpInputTitleWrapper>
      <SignUpInput
        type="email"
        placeholder="이메일 입력"
        onChange={handleChange}
        name="email"
      />
    </>
  );
}
