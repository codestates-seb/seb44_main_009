import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyInformationContainer } from "./styles/MyInformationContainer.styled";
import { MyNickName } from "./styles/MyNickName";
import { MyPersonalColor } from "./styles/MyPersonalColor";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MyInfoContext } from "../MyInfo";

export default function MyInformation() {
  // Context >> 사용
  const { userInfo } = useContext(MyInfoContext);

  return (
    <MyInformationContainer>
      <MyNickName>{userInfo.korName}</MyNickName>
      <div>
        {userInfo.personalColor === "웜톤" ? (
          <FontAwesomeIcon icon={faPalette} style={{ color: "orange" }} />
        ) : (
          <FontAwesomeIcon icon={faPalette} style={{ color: "skyblue" }} />
        )}
        <MyPersonalColor>{userInfo.personalColor}</MyPersonalColor>
      </div>
    </MyInformationContainer>
  );
}
