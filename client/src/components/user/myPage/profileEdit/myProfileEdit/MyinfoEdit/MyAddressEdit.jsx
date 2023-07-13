import { MyInfoEditeInput } from "./styles/MyInfoEditeInput.styled";
import { MyInfoTitleEdit } from "./styles/MyInfoTitleEdit";
import { MyInfoEditWrapper } from "./styles/MyInfoEditWrapper";
import { useContext } from "react";
import { MyProfileEditsContext } from "../../MyProfileEdit";

export default function MyAddressEdit() {
  const { userInfo, handleChange } = useContext(MyProfileEditsContext);

  return (
    <MyInfoEditWrapper>
      <MyInfoTitleEdit>주소</MyInfoTitleEdit>
      <MyInfoEditeInput
        type="text"
        placeholder="주소 입력"
        defaultValue={userInfo.address}
        name="address"
        onChange={handleChange}
      />
    </MyInfoEditWrapper>
  );
}
