import { MyInfoEditeInput } from "./styles/MyInfoEditeInput.styled";
import { MyInfoTitleEdit } from "./styles/MyInfoTitleEdit";
import { MyInfoEditWrapper } from "./styles/MyInfoEditWrapper";
import { MyProfileEditsContext } from "../../MyProfileEdit";
import { useContext, useEffect, useState } from "react";
import { ProfileEditInputTitleWrapper } from "./styles/ProfileEditInputTitleWrapper.styled";
import { ValidationMessage } from "../../../../singUp/styles/ValidationMessage.styled";

export default function MyNickNameEdit() {
  const { userData, handleChange } = useContext(MyProfileEditsContext);

  // State >> 유효성 검사에 따른 메세지
  const [message, setMessage] = useState("");

  // Effect >> 유효성 검사에 따른 message(state) 변경
  useEffect(() => {
    if (Object.keys(userData).length !== 0 && userData.nickName.length === 0) {
      setMessage("닉네임을 입력해주세요");
      return;
    }

    setMessage("");
  }, [userData.nickName]);

  return (
    <MyInfoEditWrapper>
      <ProfileEditInputTitleWrapper>
        <MyInfoTitleEdit>닉네임</MyInfoTitleEdit>
        <ValidationMessage>{message}</ValidationMessage>
      </ProfileEditInputTitleWrapper>
      <MyInfoEditeInput
        type="text"
        placeholder="닉네임 입력"
        defaultValue={userData.nickName}
        name="nickName"
        onChange={handleChange}
      />
    </MyInfoEditWrapper>
  );
}
