import { useContext, useEffect, useState } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { SignUpInputTitleWrapper } from "../styles/SignUpInputTitleWrapper.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";
import { SingUpContext } from "../SignUp";

export default function NameInput() {
  // Context >> 사용
  const { handleChange, signUpData } = useContext(SingUpContext);

  // State >> 유효성 검사에 따른 메세지
  const [message, setMessage] = useState("");

  // Effect >> 유효성 검사에 따른 message(state) 변경
  useEffect(() => {
    if (signUpData.korName.length === 0) {
      setMessage("이름을 입력해주세요");
      return;
    }

    setMessage("");
  }, [signUpData.korName]);

  return (
    <>
      <SignUpInputTitleWrapper>
        <SignUpInputTitle>이름</SignUpInputTitle>
        <ValidationMessage>{message}</ValidationMessage>
      </SignUpInputTitleWrapper>
      <SignUpInput
        type="text"
        placeholder="이름 입력"
        onChange={handleChange}
        name="korName"
      />
    </>
  );
}
