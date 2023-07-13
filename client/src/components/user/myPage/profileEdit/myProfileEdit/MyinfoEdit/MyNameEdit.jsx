import { MyInfoEditeInput } from "./styles/MyInfoEditeInput.styled";
import { MyInfoTitleEdit } from "./styles/MyInfoTitleEdit";
import { MyInfoEditWrapper } from "./styles/MyInfoEditWrapper";
import { useContext } from "react";
import { MyProfileEditsContext } from "../../MyProfileEdit";

export default function MyNameEdit() {
  const { userInfo, handleChange } = useContext(MyProfileEditsContext);

  return (
    <MyInfoEditWrapper>
      <MyInfoTitleEdit>이름</MyInfoTitleEdit>
      <MyInfoEditeInput
        type="text"
        placeholder="이름 입력"
        defaultValue={userInfo.korName}
        name="korName"
        onChange={handleChange}
      />
    </MyInfoEditWrapper>
  );
}
