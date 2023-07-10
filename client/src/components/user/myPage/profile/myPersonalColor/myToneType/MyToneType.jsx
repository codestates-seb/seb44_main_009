import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyToneTypeWrapper } from "./styles/MyToneTypeWrapper.styled";

export default function MyToneType() {
  return (
    <MyToneTypeWrapper>
      <FontAwesomeIcon icon={faPalette} fontSize={50} />
      <div>Cool</div>
    </MyToneTypeWrapper>
  );
}
