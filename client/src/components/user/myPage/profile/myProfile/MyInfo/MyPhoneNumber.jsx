import { useRecoilValue } from "recoil";
import { MyInfo } from "./styles/MyInfo";
import { MyInfoTitle } from "./styles/MyInfoTitle";
import { MyInfoWrapper } from "./styles/MyInfoWrapper";
import { user } from "../../../../../../atoms/user";

export default function MyPhoneNumber() {
  // recoil
  const userData = useRecoilValue(user);

  return (
    <MyInfoWrapper>
      <MyInfoTitle>전화번호: </MyInfoTitle>
      <MyInfo>{userData.phoneNumber}</MyInfo>
    </MyInfoWrapper>
  );
}
