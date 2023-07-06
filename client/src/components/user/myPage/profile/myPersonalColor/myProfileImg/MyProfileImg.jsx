import profile from "../../../../../../image/profileImg.jpg";
import { MyProfileImage } from "./styles/MyProfileImage.styled";

export default function MyProfileImg() {
  return <MyProfileImage src={profile} alt="프로필" />;
}
