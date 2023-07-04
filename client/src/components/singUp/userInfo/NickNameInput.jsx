import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";

export default function NickNameInput() {
  return (
    <>
      <SignUpInputTitle>닉네임</SignUpInputTitle>
      <SignUpInput type="text" placeholder="닉네임 입력" />
    </>
  );
}
