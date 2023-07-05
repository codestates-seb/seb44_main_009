import profile from "../../../../../../image/profileImg.jpg";
import { ProfileImg } from "./styles/ProfileImg.styled";

export default function MyInfoImg() {
  return <ProfileImg src={profile} alt="프로필" />;
}
