import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyInformationContainer } from "./styles/MyInformationContainer.styled";
import { MyNickName } from "./styles/MyNickName";
import { MyPersonalColor } from "./styles/MyPersonalColor";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { user } from "../../../../../../atoms/user";

export default function MyInformation() {
  // recoil
  const userData = useRecoilValue(user);

  return (
    <MyInformationContainer>
      <MyNickName>{userData.korName}</MyNickName>
      <div>
        {userData.personalColor === "웜톤" ? (
          <FontAwesomeIcon icon={faPalette} style={{ color: "orange" }} />
        ) : (
          <FontAwesomeIcon icon={faPalette} style={{ color: "skyblue" }} />
        )}
        <MyPersonalColor>{userData.personalColor}</MyPersonalColor>
      </div>
    </MyInformationContainer>
  );
}
