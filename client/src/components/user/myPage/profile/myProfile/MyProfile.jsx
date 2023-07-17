import { createContext, useEffect, useState } from "react";
import MyAddress from "./MyInfo/MyAddress";
import MyEmail from "./MyInfo/MyEmail";
import MyName from "./MyInfo/MyName";
import MyNickName from "./MyInfo/MyNickName";
import MyPhoneNumber from "./MyInfo/MyPhoneNumber";
import { MyProfileWrapper } from "./styles/MyProfileWrapper.styled";
import { getUser } from "../../../../../api/userAPI";

// Context >> 생성
export const MyProfileContext = createContext();

export default function MyProfileProvider({ children }) {
  // State >> API로 불러온 회원 정보
  const [userData, setUserData] = useState();

  // Effect >> API로 회원 정보 불러오기
  useEffect(() => {
    (async () => {
      setUserData(await getUser());
    })();
  }, []);

  return (
    <>
      {userData ? (
        <MyProfileContext.Provider value={{ userData }}>
          <MyProfileWrapper>{children}</MyProfileWrapper>
        </MyProfileContext.Provider>
      ) : null}
    </>
  );
}

export const MyProfile = Object.assign(MyProfileProvider, {
  MyName: MyName,
  MyNickName: MyNickName,
  MyEmail: MyEmail,
  MyPhoneNumber: MyPhoneNumber,
  MyAddress: MyAddress,
});
