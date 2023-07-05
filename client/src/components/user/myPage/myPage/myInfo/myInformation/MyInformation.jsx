import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyInformationContainer } from "./styles/MyInformationContainer.styled";
import { MyNickName } from "./styles/MyNickName";
import { MyPersonalColor } from "./styles/MyPersonalColor";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

export default function MyInformation() {
  return (
    <MyInformationContainer>
      <MyNickName>김코딩</MyNickName>
      <div>
        <FontAwesomeIcon icon={faPalette} style={{ color: "#8cb2fe" }} />
        <MyPersonalColor>쿨톤</MyPersonalColor>
      </div>
    </MyInformationContainer>
  );
}
