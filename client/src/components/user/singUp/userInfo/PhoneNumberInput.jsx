import { useContext, useEffect, useState } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";
import { SignUpInputTitleWrapper } from "../styles/SignUpInputTitleWrapper.styled";
import { SingUpContext } from "../SignUp";

export default function PhoneNumberInput() {
  // Context >> 사용
  const { handleChange, signUpData, phoneNumberRegEx } =
    useContext(SingUpContext);

  // State >> 유효성 검사에 따른 메세지
  const [message, setMessage] = useState("");

  // Effect >> 유효성 검사에 따른 message(state) 변경
  useEffect(() => {
    if (signUpData.phoneNumber.match(phoneNumberRegEx) === null) {
      setMessage("010-XXX(X)-XXXX 형식에 맞춰 입력해주세요");
      return;
    }

    setMessage("");
  }, [signUpData.phoneNumber]);

  return (
    <>
      <SignUpInputTitleWrapper>
        <SignUpInputTitle>전화번호</SignUpInputTitle>
        <ValidationMessage>{message}</ValidationMessage>
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
