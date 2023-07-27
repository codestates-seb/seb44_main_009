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
import Modal from "./Modaldev/Modaldev";

function CartOptionModal({ isCartOpen, handleCancel }) {
  const [sizeDropdownOpen, setSizeDropdownOpen] = useState(false);
  const [colorDropdownOpen, setColorDropdownOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDropdownToggle = type => {
    if (type === "size") setSizeDropdownOpen(!sizeDropdownOpen);
    if (type === "color") setColorDropdownOpen(!colorDropdownOpen);
  };

  const handleSelect = (type, value) => {
    if (type === "size") {
      setSelectedSize(value);
      setSizeDropdownOpen(false);
    }
    if (type === "color") {
      setSelectedColor(value);
      setColorDropdownOpen(false);
    }
  };

  const handleSearchInputClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    isCartOpen && (
      <ModalContainer>
        <ModalContent>
          <DropdownContainer>
            <DropdownButton onClick={() => handleDropdownToggle("size")}>
              {selectedSize ? selectedSize : "옵션 사이즈 선택"}
              <DropdownIcon isOpen={sizeDropdownOpen}>
                <FontAwesomeIcon icon={faChevronDown} />
              </DropdownIcon>
            </DropdownButton>
            {sizeDropdownOpen && (
              <DropdownMenu>
                <DropdownMenuItem onClick={() => handleSelect("size", "S")}>
                  Size S
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSelect("size", "M")}>
                  Size M
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSelect("size", "L")}>
                  Size L
                </DropdownMenuItem>
              </DropdownMenu>
            )}
          </DropdownContainer>
          <DropdownContainer>
            <DropdownButton onClick={() => handleDropdownToggle("color")}>
              {selectedColor ? selectedColor : "옵션 색상 선택"}
              <DropdownIcon isOpen={colorDropdownOpen}>
                <FontAwesomeIcon icon={faChevronDown} />
              </DropdownIcon>
            </DropdownButton>
            {colorDropdownOpen && (
              <DropdownMenu>
                <DropdownMenuItem onClick={() => handleSelect("color", "Red")}>
                  Red
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSelect("color", "Blue")}>
                  Blue
                </DropdownMenuItem>
              </DropdownMenu>
            )}
          </DropdownContainer>
          <ButtonContainer>
            <CancelButton onClick={handleCancel}>취소</CancelButton>
            <ChangeButton onClick={handleSearchInputClick}>
              변경하기
            </ChangeButton>
            {isModalOpen && <Modal onClose={handleCloseModal} />}
          </ButtonContainer>
        </ModalContent>
      </ModalContainer>
    )
  );
}

export default CartOptionModal;
