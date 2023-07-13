import { useContext } from "react";
import { MyInfo } from "./styles/MyInfo";
import { MyInfoTitle } from "./styles/MyInfoTitle";
import { MyInfoWrapper } from "./styles/MyInfoWrapper";
import { MyProfileContext } from "../MyProfile";

export default function MyEmail() {
  const { userInfo } = useContext(MyProfileContext);

  return (
    <MyInfoWrapper>
      <MyInfoTitle>이메일: </MyInfoTitle>
      <MyInfo>{userInfo.email}</MyInfo>
    </MyInfoWrapper>
  );
}
