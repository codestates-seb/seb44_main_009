import { UserInfoWapper } from "./styles/UserInfoWapper.styled";
import AddressInput from "./AddressInput";
import NameInput from "./NameInput";
import NickNameInput from "./NickNameInput";
import PhoneNumberInput from "./PhoneNumberInput";

export default function UserInfo({ children }) {
  return <UserInfoWapper>{children}</UserInfoWapper>;
}

UserInfo.NameInput = NameInput;
UserInfo.NickNameInput = NickNameInput;
UserInfo.PhoneNumberInput = PhoneNumberInput;
UserInfo.AddressInput = AddressInput;
