import { MyInfoEditeInput } from "./styles/MyInfoEditeInput.styled";
import { MyInfoTitleEdit } from "./styles/MyInfoTitleEdit";
import { MyInfoEditWrapper } from "./styles/MyInfoEditWrapper";
import { useContext, useEffect, useState } from "react";
import { MyProfileEditsContext } from "../../MyProfileEdit";
import { ValidationMessage } from "../../../../singUp/styles/ValidationMessage.styled";
import { ProfileEditInputTitleWrapper } from "./styles/ProfileEditInputTitleWrapper.styled";

export default function MyAddressEdit() {
  const { userInfo, handleChange } = useContext(MyProfileEditsContext);

  // State >> 유효성 검사에 따른 메세지
  const [message, setMessage] = useState("");

  // Effect >> 유효성 검사에 따른 message(state) 변경
  useEffect(() => {
    if (Object.keys(userInfo).length !== 0 && userInfo.address.length === 0) {
      setMessage("주소를 입력해주세요");
      return;
    }

    setMessage("");
  }, [userInfo.address]);

  return (
    <MyInfoEditWrapper>
      <ProfileEditInputTitleWrapper>
        <MyInfoTitleEdit>주소</MyInfoTitleEdit>
        <ValidationMessage>{message}</ValidationMessage>
      </ProfileEditInputTitleWrapper>
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
