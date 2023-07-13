import { MyInfoEditeInput } from "./styles/MyInfoEditeInput.styled";
import { MyInfoTitleEdit } from "./styles/MyInfoTitleEdit";
import { MyInfoEditWrapper } from "./styles/MyInfoEditWrapper";
import { useContext, useEffect, useState } from "react";
import { MyProfileEditsContext } from "../../MyProfileEdit";
import { ProfileEditInputTitleWrapper } from "./styles/ProfileEditInputTitleWrapper.styled";
import { ValidationMessage } from "../../../../singUp/styles/ValidationMessage.styled";

export default function MyNameEdit() {
  const { userData, handleChange } = useContext(MyProfileEditsContext);

  // State >> 유효성 검사에 따른 메세지
  const [message, setMessage] = useState("");

  // Effect >> 유효성 검사에 따른 message(state) 변경
  useEffect(() => {
    if (Object.keys(userData).length !== 0 && userData.korName.length === 0) {
      setMessage("이름을 입력해주세요");
      return;
    }

    setMessage("");
  }, [userData.korName]);

  return (
    <MyInfoEditWrapper>
      <ProfileEditInputTitleWrapper>
        <MyInfoTitleEdit>이름</MyInfoTitleEdit>
        <ValidationMessage>{message}</ValidationMessage>
      </ProfileEditInputTitleWrapper>
      <MyInfoEditeInput
        type="text"
        placeholder="이름 입력"
        defaultValue={userData.korName}
        name="korName"
        onChange={handleChange}
      />
    </MyInfoEditWrapper>
  );
}
