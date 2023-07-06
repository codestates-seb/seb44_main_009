import { useState } from "react";
import { styled, keyframes } from "styled-components";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const slideUpAnimation = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  bottom: 100px;
  left: 8px;
  width: 834px;
  height: 85%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  animation: ${slideUpAnimation} 0.3s ease-in-out;
`;

const ModalContent = styled.div`
  background-color: #fff;
  width: 834px;
  height: 70%;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CancelButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #ccc;
  border: 1px solid #ccc;
  border-radius: 10px;
  height: 100%;
  width: 48%;
  margin-right: 12px;
  font-size: 14px;
`;

const ChangeButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  height: 100%;
  width: 48%;
  font-size: 14px;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const DropdownIcon = styled.span`
  display: inline-block;
  margin-left: auto;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px 0;
  width: 100%;
  max-height: 120px;
  overflow-y: auto;
  z-index: 1;
`;

const DropdownMenuItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 40px;
`;

function CartOptionModal({ isCartOpen, handleCancel }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionSelect = option => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    isCartOpen && (
      <ModalContainer>
        <ModalContent>
          <DropdownContainer>
            <DropdownButton onClick={handleDropdownToggle}>
              {selectedOption ? selectedOption : "옵션 선택"}
              <DropdownIcon isOpen={dropdownOpen}>
                <FontAwesomeIcon icon={faChevronDown} />
              </DropdownIcon>
            </DropdownButton>
            {dropdownOpen && (
              <DropdownMenu>
                <DropdownMenuItem onClick={() => handleOptionSelect("옵션 1")}>
                  옵션 1
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleOptionSelect("옵션 2")}>
                  옵션 2
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleOptionSelect("옵션 3")}>
                  옵션 3
                </DropdownMenuItem>
              </DropdownMenu>
            )}
          </DropdownContainer>
          <ButtonContainer>
            <CancelButton onClick={handleCancel}>취소</CancelButton>
            <ChangeButton>변경하기</ChangeButton>
          </ButtonContainer>
        </ModalContent>
      </ModalContainer>
    )
  );
}

export default CartOptionModal;
