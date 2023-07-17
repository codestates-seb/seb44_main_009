import { useNavigate } from "react-router-dom";
import { ProfileEditPageBtn } from "./styles/ProfileEditPageBtn.styled";

export default function ProfileCanceltButton() {
  // Navigate
  const nav = useNavigate();

  const handleClick = () => {
    nav("/profile");
  };

  return <ProfileEditPageBtn onClick={handleClick}>취소</ProfileEditPageBtn>;
}
