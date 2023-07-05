import MyInfoEditBtn from "./myInfoEditBtn/MyInfoEditBtn";
import MyInfoImg from "./myInfoImg/MyInfoImg";
import MyInformation from "./myInformation/MyInformation";
import { MyInfoContainer } from "./styles/MyInfoContainer.styles";

export default function MyInfo({ children }) {
  return <MyInfoContainer>{children}</MyInfoContainer>;
}

MyInfo.Img = MyInfoImg;
MyInfo.Info = MyInformation;
MyInfo.EditBtn = MyInfoEditBtn;
