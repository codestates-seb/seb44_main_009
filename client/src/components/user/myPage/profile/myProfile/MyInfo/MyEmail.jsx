import { MyInfo } from "./styles/MyInfo";
import { MyInfoTitle } from "./styles/MyInfoTitle";
import { MyInfoWrapper } from "./styles/MyInfoWrapper";

export default function MyEmail() {
  return (
    <MyInfoWrapper>
      <MyInfoTitle>이메일: </MyInfoTitle>
      <MyInfo>XXX123@gmail.com</MyInfo>
    </MyInfoWrapper>
  );
}
