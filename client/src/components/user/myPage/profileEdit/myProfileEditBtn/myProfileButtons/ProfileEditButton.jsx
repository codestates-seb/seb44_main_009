import { useContext } from "react";
import { ProfileEditPageBtn } from "./styles/ProfileEditPageBtn.styled";
import { MyProfileEditsContext } from "../../MyProfileEdit";
import { patchUser } from "../../../../../../api/userAPI";
import { useNavigate } from "react-router-dom";

export default function ProfileEditButton() {
  // Context >> 사용
  const { userData } = useContext(MyProfileEditsContext);

  // Navigate
  const nav = useNavigate();

  const handleClick = async () => {
    try {
      await patchUser(userData);
      nav("/profile");
    } catch (error) {
      alert(error.message);
    }
  };

  return <ProfileEditPageBtn onClick={handleClick}>수정</ProfileEditPageBtn>;
}
