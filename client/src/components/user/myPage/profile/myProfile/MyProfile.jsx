import { createContext } from "react";
import MyAddress from "./MyInfo/MyAddress";
import MyEmail from "./MyInfo/MyEmail";
import MyName from "./MyInfo/MyName";
import MyNickName from "./MyInfo/MyNickName";
import MyPhoneNumber from "./MyInfo/MyPhoneNumber";
import { MyProfileWrapper } from "./styles/MyProfileWrapper.styled";
import { useRecoilValue } from "recoil";
import { user } from "../../../../../atoms/user";

// Context >> 생성
export const MyProfileContext = createContext();

export default function MyProfileProvider({ children }) {
  // recoil
  const userData = useRecoilValue(user);

  return (
    <MyProfileContext.Provider value={{ userData }}>
      <MyProfileWrapper>{children}</MyProfileWrapper>
    </MyProfileContext.Provider>
  );
}

export const MyProfile = Object.assign(MyProfileProvider, {
  MyName: MyName,
  MyNickName: MyNickName,
  MyEmail: MyEmail,
  MyPhoneNumber: MyPhoneNumber,
  MyAddress: MyAddress,
});
