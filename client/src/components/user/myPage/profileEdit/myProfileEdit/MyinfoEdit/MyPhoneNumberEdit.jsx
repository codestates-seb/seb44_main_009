import { MyInfoEditeInput } from "./styles/MyInfoEditeInput.styled";
import { MyInfoTitleEdit } from "./styles/MyInfoTitleEdit";
import { MyInfoEditWrapper } from "./styles/MyInfoEditWrapper";

export default function MyPhoneNumberEdit() {
  return (
    <MyInfoEditWrapper>
      <MyInfoTitleEdit>전화번호</MyInfoTitleEdit>
      <MyInfoEditeInput type="tel" placeholder="전화번호 입력" />
    </MyInfoEditWrapper>
  );
}
