import Header from "../../../../components/header/Header";
import MyProfileEdits from "../../../../components/user/myPage/profileEdit/MyProfileEdit";
import MyProfileEdit from "../../../../components/user/myPage/profileEdit/myProfileEdit/MyProfileEdit";
import MyPersonalColorEdit from "../../../../components/user/myPage/profileEdit/myPersonalColorEdit/MyPersonalColorEdit";
import MyPersonalColorInfoEdit from "../../../../components/user/myPage/profileEdit/myPersonalColorEdit/myPersonalColorInfoEdit/MyPersonalColorInfoEdit";
import { ProfileEditPageContainer } from "./styles/ProfileEditPageContainer.styled";
import { ProfileEditPageTitle } from "./styles/ProfileEditPageTitle";
import MyProfileEditBtn from "../../../../components/user/myPage/profileEdit/myProfileEditBtn/MyProfileEditBtn";

export default function ProfileEditPage() {
  return (
    <ProfileEditPageContainer>
      <Header />
      <MyProfileEdits>
        <ProfileEditPageTitle>프로필 수정</ProfileEditPageTitle>
        <MyProfileEdits.MyPersonalColorEdit>
          <MyPersonalColorEdit.MyProfileImgEdit />
          <MyPersonalColorEdit.MyPersonalColorInfoEdit>
            <MyPersonalColorInfoEdit.PersonalColorQuestionEdit />
            <MyPersonalColorInfoEdit.MyToneTypeEdit />
          </MyPersonalColorEdit.MyPersonalColorInfoEdit>
        </MyProfileEdits.MyPersonalColorEdit>
        <MyProfileEdits.MyProfileEdit>
          <MyProfileEdit.MyNameEdit />
          <MyProfileEdit.MyNickNameEdit />
          <MyProfileEdit.MyEmailEdit />
          <MyProfileEdit.MyPhoneNumberEdit />
          <MyProfileEdit.MyAddressEdit />
        </MyProfileEdits.MyProfileEdit>
        <MyProfileEdits.MyProfileEditBtn>
          <MyProfileEditBtn.ProfileEditButton />
          <MyProfileEditBtn.ProfileCanceltButton />
        </MyProfileEdits.MyProfileEditBtn>
      </MyProfileEdits>
    </ProfileEditPageContainer>
  );
}
