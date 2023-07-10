import { useContext } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";
import { SingUpContext } from "../SignUp";

export default function NickNameInput() {
  const setSignUpData = useContext(SingUpContext);

  const handleChange = e =>
    setSignUpData(prev => ({ ...prev, nickname: e.target.value }));

  return (
    <>
      <SignUpInputTitle>닉네임</SignUpInputTitle>
      <SignUpInput
        type="text"
        placeholder="닉네임 입력"
        onChange={handleChange}
      />
      <ValidationMessage>유효성 메세지</ValidationMessage>
    </>
  );
}
