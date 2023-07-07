import MyPersonalColorInfoEdit from "./myPersonalColorInfoEdit/MyPersonalColorInfoEdit";
import MyProfileImgEdit from "./myProfileImgEdit/MyProfileImgEdit";
import { MyPersonalColorEditContainer } from "./styels/MyPersonalColorEditContainer.styled";

export default function MyPersonalColorEdit({ children }) {
  return (
    <MyPersonalColorEditContainer>{children}</MyPersonalColorEditContainer>
  );
}

MyPersonalColorEdit.MyProfileImgEdit = MyProfileImgEdit;
MyPersonalColorEdit.MyPersonalColorInfoEdit = MyPersonalColorInfoEdit;
