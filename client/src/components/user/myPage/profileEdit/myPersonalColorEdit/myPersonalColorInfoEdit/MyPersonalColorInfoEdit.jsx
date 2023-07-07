import MyToneTypeEdit from "./myToneTypeEdit/MyToneTypeEdit";
import PersonalColorQuestionEdit from "./personalColorQuestionEdit/PersonalColorQuestionEdit";
import { MyPersonalColorEditWrapper } from "./styles/MyPersonalColorEditWrapper.styled";

export default function MyPersonalColorInfoEdit({ children }) {
  return <MyPersonalColorEditWrapper>{children}</MyPersonalColorEditWrapper>;
}

MyPersonalColorInfoEdit.PersonalColorQuestionEdit = PersonalColorQuestionEdit;
MyPersonalColorInfoEdit.MyToneTypeEdit = MyToneTypeEdit;
