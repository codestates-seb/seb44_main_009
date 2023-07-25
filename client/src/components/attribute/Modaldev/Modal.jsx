import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: white;
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: #383838;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  font-size: 22px;
`;

const Message = styled.p`
  font-size: 18px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #383838;
  color: white;
  border: none;
  padding: 3px 12px;
  border-radius: 5px;
  cursor: pointer;
`;

function Modal({ onClose }) {
  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent>
        <Title>준비중</Title>
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
