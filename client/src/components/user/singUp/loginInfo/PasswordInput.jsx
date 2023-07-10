import { useContext, useEffect, useState } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";
import { SignUpInputTitleWrapper } from "../styles/SignUpInputTitleWrapper.styled";
import { SingUpContext } from "../SignUp";

export default function PasswordInput() {
  const { handleChange, signUpData, passworedRegEx } =
    useContext(SingUpContext);

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (signUpData.password.match(passworedRegEx) === null) {
      setMessage("특수문자, 영어, 숫자를 포함하여 8자 이상 입력해주세요");
      return;
    }

    setMessage("");
  }, [signUpData.password]);
  return (
    <>
      <SignUpInputTitleWrapper>
        <SignUpInputTitle>비밀번호</SignUpInputTitle>
        <ValidationMessage>{message}</ValidationMessage>
      </SignUpInputTitleWrapper>
      <SignUpInput
        type="password"
        placeholder="비밀번호 입력"
        onChange={handleChange}
        name="password"
      />
    </>
  );
}
