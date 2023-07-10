import { MyInfo } from "./styles/MyInfo";
import { MyInfoTitle } from "./styles/MyInfoTitle";
import { MyInfoWrapper } from "./styles/MyInfoWrapper";

export default function MyNickName() {
  return (
    <MyInfoWrapper>
      <MyInfoTitle>닉네임: </MyInfoTitle>
      <MyInfo>Kim</MyInfo>
    </MyInfoWrapper>
  );
}
