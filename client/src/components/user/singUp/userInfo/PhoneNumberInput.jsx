import { useContext } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";
import { UserInfoContext } from "../UserInfo";
import { SignUpInputTitleWrapper } from "../styles/SignUpInputTitleWrapper.styled";

export default function PhoneNumberInput() {
  const handleChange = useContext(UserInfoContext);

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
