import ProfileCanceltButton from "./myProfileButtons/ProfileCanceltButton";
import ProfileEditButton from "./myProfileButtons/ProfileEditButton";
import { MyProfileEditBtnWrapper } from "./styels/MyProfileEditBtnWrapper.styled";

export default function MyProfileEditBtn({ children }) {
  return <MyProfileEditBtnWrapper>{children}</MyProfileEditBtnWrapper>;
}

MyProfileEditBtn.ProfileEditButton = ProfileEditButton;
MyProfileEditBtn.ProfileCanceltButton = ProfileCanceltButton;
