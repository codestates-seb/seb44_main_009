import { MyInfo } from "./styles/MyInfo";
import { MyInfoTitle } from "./styles/MyInfoTitle";
import { MyInfoWrapper } from "./styles/MyInfoWrapper";
import { user } from "../../../../../../atoms/user";
import { useRecoilValue } from "recoil";

export default function MyNickName() {
  // recoil
  const userData = useRecoilValue(user);

  return (
    <MyInfoWrapper>
      <MyInfoTitle>닉네임: </MyInfoTitle>
      <MyInfo>{userData.nickName}</MyInfo>
    </MyInfoWrapper>
  );
}
