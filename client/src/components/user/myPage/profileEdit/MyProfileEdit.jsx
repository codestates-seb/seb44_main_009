import MyPersonalColorEdit from "./myPersonalColorEdit/MyPersonalColorEdit";
import MyProfileEdit from "./myProfileEdit/MyProfileEdit";
import MyProfileEditBtn from "./myProfileEditBtn/MyProfileEditBtn";
import { ProfileEditWrapper } from "./styles/ProfileEditWrapper.styled";

export default function MyProfileEdits({ children }) {
  return <ProfileEditWrapper>{children}</ProfileEditWrapper>;
}

MyProfileEdits.MyPersonalColorEdit = MyPersonalColorEdit;
MyProfileEdits.MyProfileEdit = MyProfileEdit;
MyProfileEdits.MyProfileEditBtn = MyProfileEditBtn;
