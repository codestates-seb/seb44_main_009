import { createContext } from "react";
import MyAddress from "./MyInfo/MyAddress";
import MyEmail from "./MyInfo/MyEmail";
import MyName from "./MyInfo/MyName";
import MyNickName from "./MyInfo/MyNickName";
import MyPhoneNumber from "./MyInfo/MyPhoneNumber";
import { MyProfileWrapper } from "./styles/MyProfileWrapper.styled";

// Context >> 생성
export const MyProfileContext = createContext();

export default function MyProfileProvider({ children }) {
  return (
    <MyProfileContext.Provider value={{}}>
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
