import { SignUpModalBtn } from "./styles/SignUpModalBtn";
import { SignUpModalContainer } from "./styles/SignUpModalContainer";
import { SignUpModalMessage } from "./styles/SignUpModalMessage";

export default function SignUpModal() {
  return (
    <SignUpModalContainer>
      <SignUpModalMessage>메세지</SignUpModalMessage>
      <SignUpModalBtn>닫기</SignUpModalBtn>
    </SignUpModalContainer>
  );
}
