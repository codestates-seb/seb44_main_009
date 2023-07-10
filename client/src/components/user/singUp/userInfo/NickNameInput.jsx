import { useContext } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";
import { SingUpContext } from "../SignUp";

export default function NickNameInput() {
  const handleChange = useContext(SingUpContext);

  return (
    <>
      <SignUpInputTitle>닉네임</SignUpInputTitle>
      <SignUpInput
        type="text"
        placeholder="닉네임 입력"
        onChange={handleChange}
        name="nickName"
      />
      <ValidationMessage>유효성 메세지</ValidationMessage>
    </>
  );
}
