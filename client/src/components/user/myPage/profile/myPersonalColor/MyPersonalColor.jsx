import { createContext, useEffect, useState } from "react";
import MyPersonalColorInfo from "./myPersonalColorInfo/MyPersonalColorInfo";
import MyProfileImg from "./myProfileImg/MyProfileImg";
import { MyPersonalColorContainer } from "./styles/MyPersonalColorContainer.styeld";
import { getUser } from "../../../../../api/userAPI";
import { useRecoilValue } from "recoil";
import { auth } from "../../../../../atoms/auth";

// Context >> 생성
export const MyPersonalColorContext = createContext();

export default function MyPersonalColor({ children }) {
  // State >> API로 불러온 회원 정보
  const [userData, setUserData] = useState();

  //recoil
  const { token } = useRecoilValue(auth);

  // Effect >> API로 회원 정보 불러오기
  useEffect(() => {
    (async () => {
      setUserData(await getUser(token));
    })();
  }, []);

  return (
    <>
      {userData ? (
        <MyPersonalColorContext.Provider value={{ userData }}>
          <MyPersonalColorContainer>{children}</MyPersonalColorContainer>
        </MyPersonalColorContext.Provider>
      ) : null}{" "}
    </>
  );
}

MyPersonalColor.MyProfileImg = MyProfileImg;
MyPersonalColor.MyPersonalColorInfo = MyPersonalColorInfo;
