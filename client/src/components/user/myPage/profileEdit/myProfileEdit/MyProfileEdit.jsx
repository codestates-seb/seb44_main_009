import MyAddressEdit from "./MyinfoEdit/MyAddressEdit";
import MyEmailEdit from "./MyinfoEdit/MyEmailEdit";
import MyNameEdit from "./MyinfoEdit/MyNameEdit";
import MyNickNameEdit from "./MyinfoEdit/MyNickNameEdit";
import MyPhoneNumberEdit from "./MyinfoEdit/MyPhoneNumberEdit";
import { MyProfileEditWrapper } from "./styles/MyProfileEditWrapper.styled";

export default function MyProfileEdit({ children }) {
  return <MyProfileEditWrapper>{children}</MyProfileEditWrapper>;
}

MyProfileEdit.MyNameEdit = MyNameEdit;
MyProfileEdit.MyNickNameEdit = MyNickNameEdit;
MyProfileEdit.MyEmailEdit = MyEmailEdit;
MyProfileEdit.MyPhoneNumberEdit = MyPhoneNumberEdit;
MyProfileEdit.MyAddressEdit = MyAddressEdit;
