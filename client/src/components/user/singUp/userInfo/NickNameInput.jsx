import { useContext, useEffect, useState } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { SignUpInputTitleWrapper } from "../styles/SignUpInputTitleWrapper.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";
import { SingUpContext } from "../SignUp";

export default function NickNameInput() {
  // Context >> 사용
  const { handleChange, signUpData } = useContext(SingUpContext);

  // State >> 유효성 검사에 따른 메세지
  const [message, setMessage] = useState("");

  // Effect >> 유효성 검사에 따른 message(state) 변경
  useEffect(() => {
    if (signUpData.nickName.length === 0) {
      setMessage("닉네임을 입력해주세요");
      return;
    }

    setMessage("");
  }, [signUpData.nickName]);

  return (
    <>
      <SignUpInputTitleWrapper>
        <SignUpInputTitle>닉네임</SignUpInputTitle>
        <ValidationMessage>{message}</ValidationMessage>
      </SignUpInputTitleWrapper>
      <SignUpInput
        type="text"
        placeholder="닉네임 입력"
        onChange={handleChange}
        name="nickName"
      />
    </>
  );
}
