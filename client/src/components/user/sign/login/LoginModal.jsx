import { LoginModalBtn } from "./styles/LoginModalBtn";
import { LoginModalContainer } from "./styles/LoginModalContainer";
import { LoginModalMessage } from "./styles/LoginModalMessage";

export default function LoginModal() {
  return (
    <LoginModalContainer>
      <LoginModalMessage>메세지</LoginModalMessage>
      <LoginModalBtn>닫기</LoginModalBtn>
    </LoginModalContainer>
  );
}
