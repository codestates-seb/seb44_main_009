import { useContext } from "react";
import { MyInfo } from "./styles/MyInfo";
import { MyInfoTitle } from "./styles/MyInfoTitle";
import { MyInfoWrapper } from "./styles/MyInfoWrapper";
import { MyProfileContext } from "../MyProfile";

export default function MyNickName() {
  const { userData } = useContext(MyProfileContext);

  return (
    <MyInfoWrapper>
      <MyInfoTitle>닉네임: </MyInfoTitle>
      <MyInfo>{userData.nickName}</MyInfo>
    </MyInfoWrapper>
  );
}
