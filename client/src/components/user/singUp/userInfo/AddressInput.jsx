import { useContext, useEffect, useState } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { SignUpInputTitleWrapper } from "../styles/SignUpInputTitleWrapper.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";
import { SingUpContext } from "../SignUp";

export default function AddressInput() {
  const { handleChange, signUpData } = useContext(SingUpContext);

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (signUpData.address.length === 0) {
      setMessage("주소를 입력해주세요");
      return;
    }

    setMessage("");
  }, [signUpData.address]);

  return (
    <>
      <SignUpInputTitleWrapper>
        <SignUpInputTitle>주소</SignUpInputTitle>
        <ValidationMessage>{message}</ValidationMessage>
      </SignUpInputTitleWrapper>
      <SignUpInput
        type="text"
        placeholder="주소 입력"
        onChange={handleChange}
        name="address"
      />
    </>
  );
}
