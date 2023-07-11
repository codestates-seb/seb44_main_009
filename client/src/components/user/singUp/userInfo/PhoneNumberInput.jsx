import { useContext, useEffect, useState } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";
import { SignUpInputTitleWrapper } from "../styles/SignUpInputTitleWrapper.styled";
import { SingUpContext } from "../SignUp";

export default function PhoneNumberInput() {
  const { handleChange, signUpData } = useContext(SingUpContext);

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (signUpData.phoneNumber.length === 0) {
      setMessage("전화번호를 입력해주세요");
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
