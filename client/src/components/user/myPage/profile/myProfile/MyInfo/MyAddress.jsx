import { useContext } from "react";
import { MyInfo } from "./styles/MyInfo";
import { MyInfoTitle } from "./styles/MyInfoTitle";
import { MyInfoWrapper } from "./styles/MyInfoWrapper";
import { MyProfileContext } from "../MyProfile";

export default function MyAddress() {
  const { userInfo } = useContext(MyProfileContext);

  return (
    <MyInfoWrapper>
      <MyInfoTitle>주소: </MyInfoTitle>
      <MyInfo>{userInfo.address}</MyInfo>
    </MyInfoWrapper>
  );
}
