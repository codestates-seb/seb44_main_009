import { useRecoilValue } from "recoil";
import { user } from "../../../../../../atoms/user";
import { MyProfileImage } from "./styles/MyProfileImage.styled";

export default function MyProfileImg() {
  // recoil
  const userData = useRecoilValue(user);

  return <MyProfileImage src={userData.memberImageName} alt="프로필" />;
}
