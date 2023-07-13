import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyToneTypeEditContainer } from "./styles/MyToneTypeEditContainer.styled";
import { CoolToneWrapper } from "./styles/CoolToneWrapper.styled.js";
import { WarmToneWrapper } from "./styles/WarmToneWrapper.styled.js";
import { useContext } from "react";
import { MyProfileEditsContext } from "../../../MyProfileEdit";

export default function MyToneTypeEdit() {
  // Context >> 사용
  const { userInfo, setUserInfo } = useContext(MyProfileEditsContext);

  return (
    <MyToneTypeEditContainer>
      <WarmToneWrapper
        onClick={() => {
          setUserInfo(prev => ({ ...prev, personalColor: "웜톤" }));
        }}
        personalColor={userInfo.personalColor}
      >
        <FontAwesomeIcon icon={faPalette} fontSize={50} />
        <div>Warm</div>
      </WarmToneWrapper>
      <CoolToneWrapper
        onClick={() => {
          setUserInfo(prev => ({ ...prev, personalColor: "쿨톤" }));
        }}
        personalColor={userInfo.personalColor}
      >
        <FontAwesomeIcon icon={faPalette} fontSize={50} />
        <div>Cool</div>
      </CoolToneWrapper>
    </MyToneTypeEditContainer>
  );
}
