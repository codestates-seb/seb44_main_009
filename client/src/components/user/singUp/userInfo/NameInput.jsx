import { useContext } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { UserInfoContext } from "../UserInfo";
import { SignUpInputTitleWrapper } from "../styles/SignUpInputTitleWrapper.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";

export default function NameInput() {
  const handleChange = useContext(UserInfoContext);

  return (
    <>
      <SignUpInputTitleWrapper>
        <SignUpInputTitle>이름</SignUpInputTitle>
        <ValidationMessage>유효성 메세지</ValidationMessage>
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
