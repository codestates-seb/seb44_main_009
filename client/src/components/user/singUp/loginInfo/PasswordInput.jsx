import { useContext } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";
import { LoginInfoContext } from "../LoginInfo";
import { SignUpInputTitleWrapper } from "../styles/SignUpInputTitleWrapper.styled";

export default function PasswordInput() {
  const handleChange = useContext(LoginInfoContext);
  return (
    <>
      <SignUpInputTitleWrapper>
        <SignUpInputTitle>비밀번호</SignUpInputTitle>
        <ValidationMessage>유효성 메세지</ValidationMessage>
      </SignUpInputTitleWrapper>
      <SignUpInput
        type="password"
        placeholder="비밀번호 입력"
        onChange={handleChange}
        name="password"
      />
    </>
  );
}
