import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";

export default function PhoneNumberInput() {
  return (
    <>
      <SignUpInputTitle>전화번호</SignUpInputTitle>
      <SignUpInput type="tel" placeholder="전화번호 입력" />
      <ValidationMessage>유효성 메세지</ValidationMessage>
    </>
  );
}
