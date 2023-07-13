import { MyInfoEditeInput } from "./styles/MyInfoEditeInput.styled";
import { MyInfoTitleEdit } from "./styles/MyInfoTitleEdit";
import { MyInfoEditWrapper } from "./styles/MyInfoEditWrapper";
import { useContext } from "react";
import { MyProfileEditsContext } from "../../MyProfileEdit";

export default function MyPhoneNumberEdit() {
  const { userInfo, handleChange } = useContext(MyProfileEditsContext);

  return (
    <MyInfoEditWrapper>
      <MyInfoTitleEdit>전화번호</MyInfoTitleEdit>
      <MyInfoEditeInput
        type="tel"
        placeholder="전화번호 입력"
        defaultValue={userInfo.phoneNumber}
        name="phoneNumber"
        onChange={handleChange}
      />
    </MyInfoEditWrapper>
  );
}
