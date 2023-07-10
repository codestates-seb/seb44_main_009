import { MyInfoEditeInput } from "./styles/MyInfoEditeInput.styled";
import { MyInfoTitleEdit } from "./styles/MyInfoTitleEdit";
import { MyInfoEditWrapper } from "./styles/MyInfoEditWrapper";

export default function MyNickNameEdit() {
  return (
    <MyInfoEditWrapper>
      <MyInfoTitleEdit>닉네임</MyInfoTitleEdit>
      <MyInfoEditeInput type="text" placeholder="닉네임 입력" />
    </MyInfoEditWrapper>
  );
}
