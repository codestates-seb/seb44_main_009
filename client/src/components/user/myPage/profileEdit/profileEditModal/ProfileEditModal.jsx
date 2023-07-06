import { ProfileEditModalBtn } from "./styles/ProfileEditModalBtn.styled";
import { ProfileEditModalContainer } from "./styles/ProfileEditModalContainer.styled";
import { ProfileEditModalMessage } from "./styles/ProfileEditModalMessage.styled";

export default function ProfileEditModal() {
  return (
    <ProfileEditModalContainer>
      <ProfileEditModalMessage>메세지</ProfileEditModalMessage>
      <ProfileEditModalBtn>닫기</ProfileEditModalBtn>
    </ProfileEditModalContainer>
  );
}
