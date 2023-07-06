import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfileEditBtnWrapper } from "./styles/ProfileEditBtnWrapper.styled";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";

export default function ProfileEditBtn() {
  return (
    <ProfileEditBtnWrapper>
      <FontAwesomeIcon icon={faUserPen} />
    </ProfileEditBtnWrapper>
  );
}
