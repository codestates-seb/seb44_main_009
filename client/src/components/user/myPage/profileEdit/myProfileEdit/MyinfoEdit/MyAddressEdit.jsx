import { MyInfoEditeInput } from "./styles/MyInfoEditeInput.styled";
import { MyInfoTitleEdit } from "./styles/MyInfoTitleEdit";
import { MyInfoEditWrapper } from "./styles/MyInfoEditWrapper";

export default function MyAddressEdit() {
  return (
    <MyInfoEditWrapper>
      <MyInfoTitleEdit>주소</MyInfoTitleEdit>
      <MyInfoEditeInput type="text" placeholder="주소 입력" />
    </MyInfoEditWrapper>
  );
}
