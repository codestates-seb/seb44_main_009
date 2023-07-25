import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyToneTypeWrapper } from "./styles/MyToneTypeWrapper.styled";
import { useRecoilValue } from "recoil";
import { user } from "../../../../../../atoms/user";

export default function MyToneType() {
  // recoil
  const userData = useRecoilValue(user);

  return (
    <MyToneTypeWrapper personalColor={userData.personalColor}>
      <FontAwesomeIcon icon={faPalette} fontSize={50} />
      <div>{userData.personalColor}</div>
    </MyToneTypeWrapper>
  );
}
