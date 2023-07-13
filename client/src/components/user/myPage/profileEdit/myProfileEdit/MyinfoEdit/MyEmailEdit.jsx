import { MyInfoEditeInput } from "./styles/MyInfoEditeInput.styled";
import { MyInfoTitleEdit } from "./styles/MyInfoTitleEdit";
import { MyInfoEditWrapper } from "./styles/MyInfoEditWrapper";
import { MyProfileEditsContext } from "../../MyProfileEdit";
import { useContext, useEffect, useState } from "react";
import { ProfileEditInputTitleWrapper } from "./styles/ProfileEditInputTitleWrapper.styled";
import { ValidationMessage } from "../../../../singUp/styles/ValidationMessage.styled";

export default function MyEmailEdit() {
  const { userInfo, handleChange, emailRegEx } = useContext(
    MyProfileEditsContext,
  );

  // State >> 유효성 검사에 따른 메세지
  const [message, setMessage] = useState("");

  // Effect >> 유효성 검사에 따른 message(state) 변경
  useEffect(() => {
    if (
      Object.keys(userInfo).length !== 0 &&
      userInfo.email.match(emailRegEx) === null
    ) {
      setMessage("이메일 형식에 맞춰 입력해주세요");
      return;
    }

    setMessage("");
  }, [userInfo.email]);

  return (
    <MyInfoEditWrapper>
      <ProfileEditInputTitleWrapper>
        <MyInfoTitleEdit>이메일</MyInfoTitleEdit>
        <ValidationMessage>{message}</ValidationMessage>
      </ProfileEditInputTitleWrapper>
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
