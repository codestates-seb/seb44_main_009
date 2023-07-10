import { createContext, useContext } from "react";
import { UserInfoWapper } from "./styles/UserInfoWapper.styled";
import AddressInput from "./userInfo/AddressInput";
import NameInput from "./userInfo/NameInput";
import NickNameInput from "./userInfo/NickNameInput";
import PersonalColorSelect from "./userInfo/PersonalColorSelect";
import PhoneNumberInput from "./userInfo/PhoneNumberInput";
import { SingUpContext } from "./SignUp";

export const UserInfoContext = createContext();

export default function UserInfo({ children }) {
  const setSignUpData = useContext(SingUpContext);

  const handleChange = e =>
    setSignUpData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <UserInfoContext.Provider value={handleChange}>
      <UserInfoWapper>{children}</UserInfoWapper>
    </UserInfoContext.Provider>
  );
}

UserInfo.NameInput = NameInput;
UserInfo.NickNameInput = NickNameInput;
UserInfo.PhoneNumberInput = PhoneNumberInput;
UserInfo.AddressInput = AddressInput;
UserInfo.PersonalColorSelect = PersonalColorSelect;
