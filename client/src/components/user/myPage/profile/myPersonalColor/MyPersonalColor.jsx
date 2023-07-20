import { createContext } from "react";
import MyPersonalColorInfo from "./myPersonalColorInfo/MyPersonalColorInfo";
import MyProfileImg from "./myProfileImg/MyProfileImg";
import { MyPersonalColorContainer } from "./styles/MyPersonalColorContainer.styeld";
import { useRecoilValue } from "recoil";
import { user } from "../../../../../atoms/user";

// Context >> 생성
export const MyPersonalColorContext = createContext();

export default function MyPersonalColor({ children }) {
  // recoil
  const userData = useRecoilValue(user);

  return (
    <MyPersonalColorContext.Provider value={{ userData }}>
      <MyPersonalColorContainer>{children}</MyPersonalColorContainer>
    </MyPersonalColorContext.Provider>
  );
}

MyPersonalColor.MyProfileImg = MyProfileImg;
MyPersonalColor.MyPersonalColorInfo = MyPersonalColorInfo;
