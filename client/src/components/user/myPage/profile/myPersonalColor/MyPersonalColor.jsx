import { createContext } from "react";
import MyPersonalColorInfo from "./myPersonalColorInfo/MyPersonalColorInfo";
import MyProfileImg from "./myProfileImg/MyProfileImg";
import { MyPersonalColorContainer } from "./styles/MyPersonalColorContainer.styeld";

// Context >> 생성
export const MyPersonalColorContext = createContext();

export default function MyPersonalColor({ children }) {
  return (
    <MyPersonalColorContext.Provider value={{}}>
      <MyPersonalColorContainer>{children}</MyPersonalColorContainer>
    </MyPersonalColorContext.Provider>
  );
}

MyPersonalColor.MyProfileImg = MyProfileImg;
MyPersonalColor.MyPersonalColorInfo = MyPersonalColorInfo;
