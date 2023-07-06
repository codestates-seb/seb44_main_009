import { MyInfo } from "./styles/MyInfo";
import { MyInfoTitle } from "./styles/MyInfoTitle";
import { MyInfoWrapper } from "./styles/MyInfoWrapper";

export default function MyName() {
  return (
    <MyInfoWrapper>
      <MyInfoTitle>이름: </MyInfoTitle>
      <MyInfo>김코딩</MyInfo>
    </MyInfoWrapper>
  );
}
