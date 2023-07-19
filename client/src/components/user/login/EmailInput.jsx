// eslint-disable-next-line no-unused-vars
import { useContext, useEffect, useState } from "react";
import { LogInContext } from "./Login";
import { LoginInput } from "./styles/LoginInput.styled";
import { LoginInputTitle } from "./styles/LoginInputTitle.styled";
import { LogInInputTitleWrapper } from "./styles/LogInInputTitleWrapper.styled";
import { ValidationMessage } from "./styles/ValidationMessage.styled";

function EmailInput() {
  // Context >> 사용
  const { handleChange, logInData, emailRegEx } = useContext(LogInContext);

  // State >> 유효성 검사에 따른 메세지
  const [message, setMessage] = useState("");

  // Effect >> 유효성 검사에 따른 message(state) 변경
  useEffect(() => {
    if (logInData.username.match(emailRegEx) === null) {
      setMessage("이메일 형식에 맞춰 입력해주세요");
      return;
    }

    setMessage("");
  }, [logInData.username]);

  return (
    <>
      <LogInInputTitleWrapper>
        <LoginInputTitle>이메일</LoginInputTitle>
        <ValidationMessage>{message}</ValidationMessage>
      </LogInInputTitleWrapper>
      <LoginInput
        type="email"
        placeholder="이메일 입력"
        name="username"
        onChange={handleChange}
      />
    </>
  );
}

export default EmailInput;
