import { MyInfoEditeInput } from "./styles/MyInfoEditeInput.styled";
import { MyInfoTitleEdit } from "./styles/MyInfoTitleEdit";
import { MyInfoEditWrapper } from "./styles/MyInfoEditWrapper";

export default function MyNameEdit() {
  return (
    <MyInfoEditWrapper>
      <MyInfoTitleEdit>이름</MyInfoTitleEdit>
      <MyInfoEditeInput type="text" placeholder="이름 입력" />
    </MyInfoEditWrapper>
  );
}
