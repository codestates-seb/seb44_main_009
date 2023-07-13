import { MyInfoEditeInput } from "./styles/MyInfoEditeInput.styled";
import { MyInfoTitleEdit } from "./styles/MyInfoTitleEdit";
import { MyInfoEditWrapper } from "./styles/MyInfoEditWrapper";
import { useContext, useEffect, useState } from "react";
import { MyProfileEditsContext } from "../../MyProfileEdit";
import { ProfileEditInputTitleWrapper } from "./styles/ProfileEditInputTitleWrapper.styled";
import { ValidationMessage } from "../../../../singUp/styles/ValidationMessage.styled";

export default function MyPhoneNumberEdit() {
  const { userData, handleChange, phoneNumberRegEx } = useContext(
    MyProfileEditsContext,
  );

  // State >> 유효성 검사에 따른 메세지
  const [message, setMessage] = useState("");

  // Effect >> 유효성 검사에 따른 message(state) 변경
  useEffect(() => {
    if (
      Object.keys(userData).length !== 0 &&
      userData.phoneNumber.match(phoneNumberRegEx) === null
    ) {
      setMessage("010-XXX(X)-XXXX 형식에 맞춰 입력해주세요");
      return;
    }

    setMessage("");
  }, [userData.phoneNumber]);

  return (
    <MyInfoEditWrapper>
      <ProfileEditInputTitleWrapper>
        <MyInfoTitleEdit>전화번호</MyInfoTitleEdit>
        <ValidationMessage>{message}</ValidationMessage>
      </ProfileEditInputTitleWrapper>
      <MyInfoEditeInput
        type="tel"
        placeholder="전화번호 입력"
        defaultValue={userData.phoneNumber}
        name="phoneNumber"
        onChange={handleChange}
      />
    </MyInfoEditWrapper>
  );
}
