import MyInfoEditBtn from "./myInfoEditBtn/MyInfoEditBtn";
import myInfoImg from "./myInfoImg/myInfoImg";
import MyInformation from "./myInformation/MyInformation";
import { MyInfoContainer } from "./styles/MyInfoContainer.styles";

export default function MyInfo({ children }) {
  return <MyInfoContainer>{children}</MyInfoContainer>;
}

MyInfo.Img = myInfoImg;
MyInfo.Info = MyInformation;
MyInfo.EditBtn = MyInfoEditBtn;
