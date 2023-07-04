import { LoginLinkBtn } from "./styles/LoginLinkBtn.styeld";
import { LoginLinkBtnWrapper } from "./styles/LoginLinkBtnWrapper.styled";

export default function LinkBtn() {
  return (
    <LoginLinkBtnWrapper>
      <LoginLinkBtn to="/signup">회원가입</LoginLinkBtn>
    </LoginLinkBtnWrapper>
  );
}
