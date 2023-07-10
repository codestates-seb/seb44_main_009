import { useContext, useEffect, useState } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";
import { SignUpInputTitleWrapper } from "../styles/SignUpInputTitleWrapper.styled";
import { SingUpContext } from "../SignUp";

export default function PasswordInput() {
  // Context >> 사용
  const { handleChange, signUpData, passworedRegEx } =
    useContext(SingUpContext);

  // State >> 유효성 검사에 따른 메세지
  const [message, setMessage] = useState("");

  // Effect >> 유효성 검사에 따른 message(state) 변경
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
