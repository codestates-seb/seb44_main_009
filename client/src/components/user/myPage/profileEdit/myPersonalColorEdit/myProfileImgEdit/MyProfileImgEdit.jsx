import { useContext } from "react";

import { MyProfileImageEdit } from "./styles/MyProfileImageEdit.styled";
import { MyProfileEditsContext } from "../../MyProfileEdit";

export default function MyProfileImgEdit() {
  // Context >> 사용
  const { userInfo } = useContext(MyProfileEditsContext);
  return <MyProfileImageEdit src={userInfo.memberImageName} alt="프로필" />;
}
