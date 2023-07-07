import MyPersonalColorInfo from "./myPersonalColorInfo/MyPersonalColorInfo";
import MyProfileImg from "./myProfileImg/MyProfileImg";
import { MyPersonalColorContainer } from "./styles/MyPersonalColorContainer.styeld";

export default function MyPersonalColor({ children }) {
  return <MyPersonalColorContainer>{children}</MyPersonalColorContainer>;
}

MyPersonalColor.MyProfileImg = MyProfileImg;
MyPersonalColor.MyPersonalColorInfo = MyPersonalColorInfo;
