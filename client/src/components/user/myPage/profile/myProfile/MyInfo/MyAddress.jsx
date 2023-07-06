import { MyInfo } from "./styles/MyInfo";
import { MyInfoTitle } from "./styles/MyInfoTitle";
import { MyInfoWrapper } from "./styles/MyInfoWrapper";

export default function MyAddress() {
  return (
    <MyInfoWrapper>
      <MyInfoTitle>주소: </MyInfoTitle>
      <MyInfo>서울특별시 강북구 ...</MyInfo>
    </MyInfoWrapper>
  );
}
