import { useContext } from "react";
import { ProfileEditPageBtn } from "./styles/ProfileEditPageBtn.styled";
import { MyProfileEditsContext } from "../../MyProfileEdit";
import { patchUser } from "../../../../../../api/userAPI";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { auth } from "../../../../../../atoms/auth";

export default function ProfileEditButton() {
  // recoil >> auth.token
  const { token } = useRecoilValue(auth);

  // Context >> 사용
  const { userData } = useContext(MyProfileEditsContext);

  // Navigate
  const nav = useNavigate();

  const handleClick = async () => {
    try {
      await patchUser(userData, token);
      nav("/profile");
    } catch (error) {
      alert(error.message);
    }
  };

  return <ProfileEditPageBtn onClick={handleClick}>수정</ProfileEditPageBtn>;
}
