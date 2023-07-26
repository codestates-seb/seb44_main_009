import { faImage } from "@fortawesome/free-solid-svg-icons";
import {
  ModalBackdrop,
  ModalContent,
  ModalTitle,
  MessageContainer,
  Message,
  Icon,
  CloseButton,
} from "./styles/ModaldevStyles";

function Modalphoto({ onClose }) {
  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent>
        <ModalTitle></ModalTitle>
        <MessageContainer>
          <Icon icon={faImage} />
          <Message>사진을 추가해주세요.</Message>
        </MessageContainer>
        <CloseButton onClick={onClose}>x</CloseButton>
      </ModalContent>
    </ModalBackdrop>
  );
}

export default Modalphoto;
