import { faWrench } from "@fortawesome/free-solid-svg-icons";
import {
  ModalBackdrop,
  ModalContent,
  ModalTitle,
  MessageContainer,
  Message,
  Icon,
  CloseButton,
} from "./styles/ModaldevStyles";

function Modal({ onClose }) {
  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent>
        <ModalTitle>준비중</ModalTitle>
        <MessageContainer>
          <Icon icon={faWrench} />
          <Message>기능 준비중입니다.</Message>
        </MessageContainer>
        <CloseButton onClick={onClose}>x</CloseButton>
      </ModalContent>
    </ModalBackdrop>
  );
}

export default Modal;
