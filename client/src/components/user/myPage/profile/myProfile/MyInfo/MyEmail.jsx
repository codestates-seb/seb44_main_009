import { useContext } from "react";
import { MyInfo } from "./styles/MyInfo";
import { MyInfoTitle } from "./styles/MyInfoTitle";
import { MyInfoWrapper } from "./styles/MyInfoWrapper";
import { MyProfileContext } from "../MyProfile";

export default function MyEmail() {
  const { userData } = useContext(MyProfileContext);

  return (
    <MyInfoWrapper>
      <MyInfoTitle>이메일: </MyInfoTitle>
      <MyInfo>{userData.email}</MyInfo>
    </MyInfoWrapper>
  );
}
