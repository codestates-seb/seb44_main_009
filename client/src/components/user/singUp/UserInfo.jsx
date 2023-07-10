import { UserInfoWapper } from "./styles/UserInfoWapper.styled";
import AddressInput from "./userInfo/AddressInput";
import NameInput from "./userInfo/NameInput";
import NickNameInput from "./userInfo/NickNameInput";
import PersonalColorSelect from "./userInfo/PersonalColorSelect";
import PhoneNumberInput from "./userInfo/PhoneNumberInput";

export default function UserInfo({ children }) {
  return <UserInfoWapper>{children}</UserInfoWapper>;
}

UserInfo.NameInput = NameInput;
UserInfo.NickNameInput = NickNameInput;
UserInfo.PhoneNumberInput = PhoneNumberInput;
UserInfo.AddressInput = AddressInput;
UserInfo.PersonalColorSelect = PersonalColorSelect;
