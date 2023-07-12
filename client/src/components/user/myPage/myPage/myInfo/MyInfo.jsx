import { getUser } from "../../../../../api/userAPI";
import MyInfoEditBtn from "./myInfoEditBtn/MyInfoEditBtn";
import MyInfoImg from "./myInfoImg/MyInfoImg";
import MyInformation from "./myInformation/MyInformation";
import { MyInfoContainer } from "./styles/MyInfoContainer.styles";
import { createContext, useEffect, useState } from "react";

// Context >> 생성
export const MyInfoContext = createContext();

export default function MyInfo({ children }) {
  // State >> API로 불러온 유저 정보
  const [userInfo, setUserInfo] = useState();

  // Effet >> API 요청으로 유저 정보 불러오기
  useEffect(() => {
    (async () => {
      setUserInfo(await getUser());
    })();
  }, []);

  return (
    <>
      {userInfo ? (
        <MyInfoContext.Provider value={{ userInfo }}>
          <MyInfoContainer>{children}</MyInfoContainer>
        </MyInfoContext.Provider>
      ) : null}
    </>
  );
}

MyInfo.Img = MyInfoImg;
MyInfo.Info = MyInformation;
MyInfo.EditBtn = MyInfoEditBtn;
