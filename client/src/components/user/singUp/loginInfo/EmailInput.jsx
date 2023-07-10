import { useContext, useEffect, useState } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";
import { SignUpInputTitleWrapper } from "../styles/SignUpInputTitleWrapper.styled";
import { SingUpContext } from "../SignUp";

export default function EmailInput() {
  const { handleChange, signUpData } = useContext(SingUpContext);

  const [message, setMessage] = useState("");

  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  useEffect(() => {
    if (signUpData.email.match(emailRegEx) === null) {
      setMessage("이메일 형식에 맞춰 입력해주세요");
      return;
    }

    setMessage("");
  }, [signUpData.email]);

  return (
    <>
      <SignUpInputTitleWrapper>
        <SignUpInputTitle>이메일</SignUpInputTitle>
        <ValidationMessage>{message}</ValidationMessage>
      </SignUpInputTitleWrapper>
      <SignUpInput
        type="email"
        placeholder="이메일 입력"
        onChange={handleChange}
        name="email"
      />
    </>
  );
}
