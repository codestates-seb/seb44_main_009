import { MyInfoEditeInput } from "./styles/MyInfoEditeInput.styled";
import { MyInfoTitleEdit } from "./styles/MyInfoTitleEdit";
import { MyInfoEditWrapper } from "./styles/MyInfoEditWrapper";
import { MyProfileEditsContext } from "../../MyProfileEdit";
import { useContext } from "react";

export default function MyNickNameEdit() {
  const { userInfo, handleChange } = useContext(MyProfileEditsContext);

  return (
    <MyInfoEditWrapper>
      <MyInfoTitleEdit>닉네임</MyInfoTitleEdit>
      <MyInfoEditeInput
        type="text"
        placeholder="닉네임 입력"
        defaultValue={userInfo.nickName}
        name="nickName"
        onChange={handleChange}
      />
    </MyInfoEditWrapper>
  );
}
