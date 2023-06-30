import { LoginLinkBtn } from "./styles/LoginLinkBtn.styeld";
import { LoginLinkBtnWapper } from "./styles/LoginLinkBtnWapper.styled";

export default function LinkBtn() {
  return (
    <LoginLinkBtnWapper>
      <LoginLinkBtn to="/signup">회원가입</LoginLinkBtn>
    </LoginLinkBtnWapper>
  );
}
