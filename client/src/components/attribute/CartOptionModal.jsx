import { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalContainer } from "./styles/OptionModal/ModalContainer.styled";
import { ModalContent } from "./styles/OptionModal/ModalContent.styled";
import { CancelButton } from "./styles/OptionModal/CancelButton.styled";
import { ChangeButton } from "./styles/OptionModal/ChangeButton.styled";
import { DropdownContainer } from "./styles/OptionModal/DropdownContainer.styled";
import { DropdownButton } from "./styles/OptionModal/DropdownButton.styled";
import { DropdownIcon } from "./styles/OptionModal/DropdownIcon.styled";
import { DropdownMenu } from "./styles/OptionModal/DropdownMenu.styled";
import { DropdownMenuItem } from "./styles/OptionModal/DropdownMenuItem.styled";
import { ButtonContainer } from "./styles/OptionModal/ButtonContainer.styled";
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
