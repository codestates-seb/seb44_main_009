import { useContext } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";
import { SignUpInputTitleWrapper } from "../styles/SignUpInputTitleWrapper.styled";
import { SingUpContext } from "../SignUp";

export default function PhoneNumberInput() {
  const { handleChange } = useContext(SingUpContext);

  return (
    <>
      <SignUpInputTitleWrapper>
        <SignUpInputTitle>전화번호</SignUpInputTitle>
        <ValidationMessage>유효성 메세지</ValidationMessage>
      </SignUpInputTitleWrapper>
      <SignUpInput
        type="tel"
        placeholder="전화번호 입력"
        onChange={handleChange}
        name="phoneNumber"
      />
    </>
  );
}
