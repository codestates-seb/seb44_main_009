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

export default function MyProfile({ children }) {
  // State >> API로 불러온 회원 정보
  const [userInfo, setUserInfo] = useState();

  // Effect >> API로 회원 정보 불러오기
  useEffect(() => {
    (async () => {
      setUserInfo(await getUser());
    })();
  }, []);

  return (
    <>
      {userInfo ? (
        <MyProfileContext.Provider value={{ userInfo }}>
          <MyProfileWrapper>{children}</MyProfileWrapper>
        </MyProfileContext.Provider>
      ) : null}
    </>
  );
}

MyProfile.MyName = MyName;
MyProfile.MyNickName = MyNickName;
MyProfile.MyEmail = MyEmail;
MyProfile.MyPhoneNumber = MyPhoneNumber;
MyProfile.MyAddress = MyAddress;
