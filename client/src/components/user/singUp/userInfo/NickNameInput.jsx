import { useContext, useEffect, useState } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { SignUpInputTitleWrapper } from "../styles/SignUpInputTitleWrapper.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";
import { SingUpContext } from "../SignUp";

export default function NickNameInput() {
  const { handleChange, signUpData } = useContext(SingUpContext);

  const [message, setMessage] = useState("");

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
