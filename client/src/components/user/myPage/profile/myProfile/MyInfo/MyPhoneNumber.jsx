import { MyInfo } from "./styles/MyInfo";
import { MyInfoTitle } from "./styles/MyInfoTitle";
import { MyInfoWrapper } from "./styles/MyInfoWrapper";

export default function MyPhoneNumber() {
  return (
    <MyInfoWrapper>
      <MyInfoTitle>전화번호: </MyInfoTitle>
      <MyInfo>010-****-****</MyInfo>
    </MyInfoWrapper>
  );
}
