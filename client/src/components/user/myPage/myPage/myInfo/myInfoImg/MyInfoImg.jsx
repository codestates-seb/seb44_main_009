import { useRecoilValue } from "recoil";
import { user } from "../../../../../../atoms/user";
import { MyProfileImage } from "../../../profile/myPersonalColor/myProfileImg/styles/MyProfileImage.styled";

export default function MyInfoImg() {
  // recoil
  const userData = useRecoilValue(user);

  return <MyProfileImage src={userData.memberImageName} alt="프로필" />;
}
