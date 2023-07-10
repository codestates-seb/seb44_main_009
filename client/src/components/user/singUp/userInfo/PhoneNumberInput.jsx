import { useContext } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";
import { SingUpContext } from "../SignUp";

export default function PhoneNumberInput() {
  const handleChange = useContext(SingUpContext);

  return (
    <>
      <SignUpInputTitle>전화번호</SignUpInputTitle>
      <SignUpInput
        type="tel"
        placeholder="전화번호 입력"
        onChange={handleChange}
        name="phoneNumber"
      />
      <ValidationMessage>유효성 메세지</ValidationMessage>
    </>
  );
}
