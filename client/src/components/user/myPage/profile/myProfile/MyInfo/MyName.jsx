import { useRecoilValue } from "recoil";
import { user } from "../../../../../../atoms/user";
import { MyInfo } from "./styles/MyInfo";
import { MyInfoTitle } from "./styles/MyInfoTitle";
import { MyInfoWrapper } from "./styles/MyInfoWrapper";

export default function MyName() {
  // recoil
  const userData = useRecoilValue(user);

  return (
    <MyInfoWrapper>
      <MyInfoTitle>이름: </MyInfoTitle>
      <MyInfo>{userData.korName}</MyInfo>
    </MyInfoWrapper>
  );
}
