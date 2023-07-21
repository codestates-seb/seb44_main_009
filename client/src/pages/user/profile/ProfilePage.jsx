import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import { ProfilePageContainer } from "./styles/ProfilePageContainer.styled";
import { ProfilePageWapper } from "./styles/ProfilePageWapper.styled";
import { ProfilePageTitle } from "./styles/ProfilePageTitle.styled";
import MyPersonalColor from "../../../components/user/myPage/profile/myPersonalColor/MyPersonalColor";
import MyPersonalColorInfo from "../../../components/user/myPage/profile/myPersonalColor/myPersonalColorInfo/MyPersonalColorInfo";
import MyProfile from "../../../components/user/myPage/profile/myProfile/MyProfile";
import ProfileEditBtn from "../../../components/user/myPage/profile/profileEditBtn/ProfileEditBtn";
import { ProfilePageTitleWrapper } from "./styles/ProfilePageTitleWrapper.styled";

export default function ProfilePage() {
  return (
    <ProfilePageContainer>
      <Header />
      <ProfilePageWapper>
        <ProfilePageTitleWrapper>
          <ProfilePageTitle>프로필</ProfilePageTitle>
          <ProfileEditBtn />
        </ProfilePageTitleWrapper>
        <MyPersonalColor>
          <MyPersonalColor.MyProfileImg />
          <MyPersonalColor.MyPersonalColorInfo>
            <MyPersonalColorInfo.PersonalColorQuestion />
            <MyPersonalColorInfo.MyToneType />
          </MyPersonalColor.MyPersonalColorInfo>
        </MyPersonalColor>
        <MyProfile>
          <MyProfile.MyName />
          <MyProfile.MyNickName />
          <MyProfile.MyEmail />
          <MyProfile.MyPhoneNumber />
          <MyProfile.MyAddress />
        </MyProfile>
      </ProfilePageWapper>
      <Footer />
    </ProfilePageContainer>
  );
}
