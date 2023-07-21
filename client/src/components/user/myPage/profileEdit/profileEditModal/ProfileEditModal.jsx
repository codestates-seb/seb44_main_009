import { useContext } from "react";
import { ProfileEditModalBtn } from "./styles/ProfileEditModalBtn.styled";
import { ProfileEditModalContainer } from "./styles/ProfileEditModalContainer.styled";
import { ProfileEditModalMessage } from "./styles/ProfileEditModalMessage.styled";
import { MyProfileEditsContext } from "../MyProfileEdit";

export default function ProfileEditModal() {
  // Context >> 사용
  const { setShowModal, validation } = useContext(MyProfileEditsContext);

  // handleEvent >> showModal(state) 변경
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <ProfileEditModalContainer>
      <ProfileEditModalMessage>{validation}</ProfileEditModalMessage>
      <ProfileEditModalBtn onClick={handleCloseModal}>닫기</ProfileEditModalBtn>
    </ProfileEditModalContainer>
  );
}
