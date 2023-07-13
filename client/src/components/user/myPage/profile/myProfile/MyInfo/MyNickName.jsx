import { useContext } from "react";
import { MyInfo } from "./styles/MyInfo";
import { MyInfoTitle } from "./styles/MyInfoTitle";
import { MyInfoWrapper } from "./styles/MyInfoWrapper";
import { MyProfileContext } from "../MyProfile";

export default function MyNickName() {
  const { userInfo } = useContext(MyProfileContext);

  return (
    <MyInfoWrapper>
      <MyInfoTitle>닉네임: </MyInfoTitle>
      <MyInfo>{userInfo.nickName}</MyInfo>
    </MyInfoWrapper>
  );
}
