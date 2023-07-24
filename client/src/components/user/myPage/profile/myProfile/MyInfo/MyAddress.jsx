import { useRecoilValue } from "recoil";
import { MyInfo } from "./styles/MyInfo";
import { MyInfoTitle } from "./styles/MyInfoTitle";
import { MyInfoWrapper } from "./styles/MyInfoWrapper";
import { user } from "../../../../../../atoms/user";

export default function MyAddress() {
  // recoil
  const userData = useRecoilValue(user);

  return (
    <MyInfoWrapper>
      <MyInfoTitle>주소: </MyInfoTitle>
      <MyInfo>{userData.address}</MyInfo>
    </MyInfoWrapper>
  );
}
