import { MyInfoEditeInput } from "./styles/MyInfoEditeInput.styled";
import { MyInfoTitleEdit } from "./styles/MyInfoTitleEdit";
import { MyInfoEditWrapper } from "./styles/MyInfoEditWrapper";

export default function MyEmailEdit() {
  return (
    <MyInfoEditWrapper>
      <MyInfoTitleEdit>이메일</MyInfoTitleEdit>
      <MyInfoEditeInput type="email" placeholder="이메일 입력" />
    </MyInfoEditWrapper>
  );
}
