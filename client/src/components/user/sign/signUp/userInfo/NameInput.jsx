import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";

export default function NameInput() {
  return (
    <>
      <SignUpInputTitle>이름</SignUpInputTitle>
      <SignUpInput type="text" placeholder="이름 입력" />
    </>
  );
}
