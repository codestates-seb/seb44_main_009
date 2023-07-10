import { useContext, useEffect, useState } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { SignUpInputTitleWrapper } from "../styles/SignUpInputTitleWrapper.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";
import { SingUpContext } from "../SignUp";

export default function NameInput() {
  const { handleChange, signUpData } = useContext(SingUpContext);

  const [message, setMessage] = useState("");

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
