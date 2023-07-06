import Header from "../../../../components/header/Header";
import MyPersonalColorEdit from "../../../../components/user/myPage/profileEdit/myPersonalColorEdit/MyPersonalColorEdit";
import MyPersonalColorInfoEdit from "../../../../components/user/myPage/profileEdit/myPersonalColorEdit/myPersonalColorInfoEdit/MyPersonalColorInfoEdit";
import MyProfileEdit from "../../../../components/user/myPage/profileEdit/myProfileEdit/MyProfileEdit";
import { ProfileEditPageContainer } from "./styles/ProfileEditPageContainer.styled";
import { ProfileEditPageTitle } from "./styles/ProfileEditPageTitle";
import { ProfileEditPageWapper } from "./styles/ProfileEditPageWapper.styled";

export default function ProfileEditPage() {
  return (
    <ProfileEditPageContainer>
      <Header />
      <ProfileEditPageWapper>
        <ProfileEditPageTitle>프로필 수정</ProfileEditPageTitle>
        <MyPersonalColorEdit>
          <MyPersonalColorEdit.MyProfileImgEdit />
          <MyPersonalColorEdit.MyPersonalColorInfoEdit>
            <MyPersonalColorInfoEdit.PersonalColorQuestionEdit />
            <MyPersonalColorInfoEdit.MyToneTypeEdit />
          </MyPersonalColorEdit.MyPersonalColorInfoEdit>
        </MyPersonalColorEdit>
        <MyProfileEdit>
          <MyProfileEdit.MyNameEdit />
          <MyProfileEdit.MyNickNameEdit />
          <MyProfileEdit.MyEmailEdit />
          <MyProfileEdit.MyPhoneNumberEdit />
          <MyProfileEdit.MyAddressEdit />
        </MyProfileEdit>
      </ProfileEditPageWapper>
    </ProfileEditPageContainer>
  );
}
