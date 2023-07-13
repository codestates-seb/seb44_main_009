import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyToneTypeWrapper } from "./styles/MyToneTypeWrapper.styled";
import { useContext } from "react";
import { MyPersonalColorContext } from "../MyPersonalColor";

export default function MyToneType() {
  // Context >> 사용
  const { userData } = useContext(MyPersonalColorContext);

  return (
    <MyToneTypeWrapper personalColor={userData.personalColor}>
      <FontAwesomeIcon icon={faPalette} fontSize={50} />
      <div>{userData.personalColor}</div>
    </MyToneTypeWrapper>
  );
}
