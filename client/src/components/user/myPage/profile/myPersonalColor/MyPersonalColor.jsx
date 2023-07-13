import { createContext, useEffect, useState } from "react";
import MyPersonalColorInfo from "./myPersonalColorInfo/MyPersonalColorInfo";
import MyProfileImg from "./myProfileImg/MyProfileImg";
import { MyPersonalColorContainer } from "./styles/MyPersonalColorContainer.styeld";
import { getUser } from "../../../../../api/userAPI";

// Context >> 생성
export const MyPersonalColorContext = createContext();

export default function MyPersonalColor({ children }) {
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
        <MyPersonalColorContext.Provider value={{ userInfo }}>
          <MyPersonalColorContainer>{children}</MyPersonalColorContainer>
        </MyPersonalColorContext.Provider>
      ) : null}{" "}
    </>
  );
}

MyPersonalColor.MyProfileImg = MyProfileImg;
MyPersonalColor.MyPersonalColorInfo = MyPersonalColorInfo;
