import { useContext } from "react";
import { MyInfo } from "./styles/MyInfo";
import { MyInfoTitle } from "./styles/MyInfoTitle";
import { MyInfoWrapper } from "./styles/MyInfoWrapper";
import { MyProfileContext } from "../MyProfile";

export default function MyName() {
  const { userInfo } = useContext(MyProfileContext);

  return (
    <MyInfoWrapper>
      <MyInfoTitle>이름: </MyInfoTitle>
      <MyInfo>{userInfo.korName}</MyInfo>
    </MyInfoWrapper>
  );
}
