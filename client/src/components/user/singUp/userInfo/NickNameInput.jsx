import { useContext } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { UserInfoContext } from "../UserInfo";
import { SignUpInputTitleWrapper } from "../styles/SignUpInputTitleWrapper.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";

export default function NickNameInput() {
  const handleChange = useContext(UserInfoContext);

  return (
    <>
      <SignUpInputTitleWrapper>
        <SignUpInputTitle>닉네임</SignUpInputTitle>
        <ValidationMessage>유효성 메세지</ValidationMessage>
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
