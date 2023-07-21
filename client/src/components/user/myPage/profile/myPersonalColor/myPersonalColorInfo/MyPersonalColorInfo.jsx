import MyToneType from "../myToneType/MyToneType";
import PersonalColorQuestion from "./personalColorQuestion/PersonalColorQuestion";
import { MyPersonalColorWrapper } from "./styles/MyPersonalColorWrapper";

export default function MyPersonalColorInfo({ children }) {
  return <MyPersonalColorWrapper>{children}</MyPersonalColorWrapper>;
}

MyPersonalColorInfo.PersonalColorQuestion = PersonalColorQuestion;
MyPersonalColorInfo.MyToneType = MyToneType;
