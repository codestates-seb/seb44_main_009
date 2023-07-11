import { useContext } from "react";
import { LogInContext } from "./Login";
import { LoginInput } from "./styles/LoginInput.styled";
import { LoginInputTitle } from "./styles/LoginInputTitle.styled";
import { LogInInputTitleWrapper } from "./styles/LogInInputTitleWrapper.styled";
import { ValidationMessage } from "./styles/ValidationMessage.styled";

function EmailInput() {
  // Context >> 사용
  const { handleChange } = useContext(LogInContext);

  return (
    <>
      <LogInInputTitleWrapper>
        <LoginInputTitle>이메일</LoginInputTitle>
        <ValidationMessage>유효성 검사 메세지</ValidationMessage>
      </LogInInputTitleWrapper>
      <LoginInput
        type="email"
        placeholder="이메일 입력"
        name="email"
        onChange={handleChange}
      />
    </>
  );
}

export default EmailInput;
