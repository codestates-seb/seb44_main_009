import { useContext } from "react";
import { LoginInput } from "./styles/LoginInput.styled";
import { LoginInputTitle } from "./styles/LoginInputTitle.styled";
import { LogInContext } from "./Login";
import { LogInInputTitleWrapper } from "./styles/LogInInputTitleWrapper.styled";
import { ValidationMessage } from "./styles/ValidationMessage.styled";

export default function PasswordInput() {
  // Context >> 사용
  const { handleChange } = useContext(LogInContext);

  return (
    <>
      <LogInInputTitleWrapper>
        <LoginInputTitle>비밀번호</LoginInputTitle>
        <ValidationMessage>유효성 검사 메세지</ValidationMessage>
      </LogInInputTitleWrapper>
      <LoginInput
        type="password"
        placeholder="비밀번호 입력"
        name="password"
        onChange={handleChange}
      />
    </>
  );
}
