import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";

export default function PhoneNumberInput() {
  return (
    <>
      <SignUpInputTitle>전화번호</SignUpInputTitle>
      <SignUpInput type="tel" placeholder="전화번호 입력" />
    </>
  );
}
