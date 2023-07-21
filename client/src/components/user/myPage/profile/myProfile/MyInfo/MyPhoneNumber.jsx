import { useContext } from "react";
import { MyInfo } from "./styles/MyInfo";
import { MyInfoTitle } from "./styles/MyInfoTitle";
import { MyInfoWrapper } from "./styles/MyInfoWrapper";
import { MyProfileContext } from "../MyProfile";

export default function MyPhoneNumber() {
  const { userData } = useContext(MyProfileContext);

  return (
    <MyInfoWrapper>
      <MyInfoTitle>전화번호: </MyInfoTitle>
      <MyInfo>{userData.phoneNumber}</MyInfo>
    </MyInfoWrapper>
  );
}
