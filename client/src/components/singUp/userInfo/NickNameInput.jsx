import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";

export default function NickNameInput() {
  return (
    <>
      <SignUpInputTitle>닉네임</SignUpInputTitle>
      <SignUpInput type="text" placeholder="닉네임 입력" />
      <ValidationMessage>유효성 메세지</ValidationMessage>
    </>
  );
}
