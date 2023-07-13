import { MyInfoEditeInput } from "./styles/MyInfoEditeInput.styled";
import { MyInfoTitleEdit } from "./styles/MyInfoTitleEdit";
import { MyInfoEditWrapper } from "./styles/MyInfoEditWrapper";
import { MyProfileEditsContext } from "../../MyProfileEdit";
import { useContext } from "react";

export default function MyEmailEdit() {
  const { userInfo, handleChange } = useContext(MyProfileEditsContext);

  return (
    <MyInfoEditWrapper>
      <MyInfoTitleEdit>이메일</MyInfoTitleEdit>
      <MyInfoEditeInput
        type="email"
        placeholder="이메일 입력"
        defaultValue={userInfo.email}
        name="email"
        onChange={handleChange}
      />
    </MyInfoEditWrapper>
  );
}
