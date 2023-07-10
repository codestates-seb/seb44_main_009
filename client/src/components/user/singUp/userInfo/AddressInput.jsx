import { useContext } from "react";
import { SignUpInput } from "../styles/SignUpInput.styled";
import { SignUpInputTitle } from "../styles/SignUpInputTitle.styled";
import { UserInfoContext } from "../UserInfo";
import { SignUpInputTitleWrapper } from "../styles/SignUpInputTitleWrapper.styled";
import { ValidationMessage } from "../styles/ValidationMessage.styled";

export default function AddressInput() {
  const handleChange = useContext(UserInfoContext);

  return (
    <>
      <SignUpInputTitleWrapper>
        <SignUpInputTitle>주소</SignUpInputTitle>
        <ValidationMessage>유효성 메세지</ValidationMessage>
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
