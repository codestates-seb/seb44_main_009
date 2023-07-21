import { useContext, useEffect, useState } from "react";
import { LoginInput } from "./styles/LoginInput.styled";
import { LoginInputTitle } from "./styles/LoginInputTitle.styled";
import { LogInContext } from "./Login";
import { LogInInputTitleWrapper } from "./styles/LogInInputTitleWrapper.styled";
import { ValidationMessage } from "./styles/ValidationMessage.styled";

export default function PasswordInput() {
  // Context >> 사용
  const { handleChange, passworedRegEx, logInData } = useContext(LogInContext);

  // State >> 유효성 검사에 따른 메세지
  const [message, setMessage] = useState("");

  // Effect >> 유효성 검사에 따른 메세지 변경
  useEffect(() => {
    if (logInData.password.match(passworedRegEx) === null) {
      setMessage("특수문자, 영어, 숫자를 포함하여 8자 이상 입력해주세요.");
      return;
    }

    setMessage("");
  }, [logInData.password]);

  return (
    <>
      <LogInInputTitleWrapper>
        <LoginInputTitle>비밀번호</LoginInputTitle>
        <ValidationMessage>{message}</ValidationMessage>
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
