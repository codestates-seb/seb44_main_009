import { useRecoilValue } from "recoil";
import { MyInfo } from "./styles/MyInfo";
import { MyInfoTitle } from "./styles/MyInfoTitle";
import { MyInfoWrapper } from "./styles/MyInfoWrapper";
import { user } from "../../../../../../atoms/user";

export default function MyEmail() {
  // recoil
  const userData = useRecoilValue(user);

  return (
    <MyInfoWrapper>
      <MyInfoTitle>이메일: </MyInfoTitle>
      <MyInfo>{userData.email}</MyInfo>
    </MyInfoWrapper>
  );
}
