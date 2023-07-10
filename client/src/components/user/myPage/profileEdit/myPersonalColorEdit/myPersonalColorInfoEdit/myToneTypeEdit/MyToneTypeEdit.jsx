import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyToneTypeEditContainer } from "./styles/MyToneTypeEditContainer.styled";
import { CoolToneWrapper } from "./styles/CoolToneWrapper.styled.js";
import { WarmToneWrapper } from "./styles/WarmToneWrapper.styled.js";

export default function MyToneTypeEdit() {
  return (
    <MyToneTypeEditContainer>
      <WarmToneWrapper>
        <FontAwesomeIcon icon={faPalette} fontSize={50} />
        <div>Warm</div>
      </WarmToneWrapper>
      <CoolToneWrapper>
        <FontAwesomeIcon icon={faPalette} fontSize={50} />
        <div>Cool</div>
      </CoolToneWrapper>
    </MyToneTypeEditContainer>
  );
}
