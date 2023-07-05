import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { EditBtnWrapper } from "./styles/EditBtnWrapper.styled";

export default function MyInfoEditBtn() {
  return (
    <EditBtnWrapper>
      <FontAwesomeIcon icon={faUserPen} />
    </EditBtnWrapper>
  );
}
