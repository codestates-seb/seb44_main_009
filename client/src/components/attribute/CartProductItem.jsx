import { useState } from "react";
import { styled, keyframes } from "styled-components";
import { faXmark, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accessary } from "../../image/index";

const ProductWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Checkbox = styled.input`
  transform: scale(1.7);
  margin-right: 12px;
  appearance: none;
  width: 14px;
  height: 14px;
  border: 2px solid #c4c4c4;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  &:checked {
    background-color: #ff5160;
    border-color: #ff5160;
  }
  &::after {
    content: "";
    position: absolute;
    left: 3px;
    width: 4px;
    height: 8px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const ColumnStyle = styled.div`
  flex-direction: column;
  width: 100%;
`;

const ProductDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const ProductView = styled.div`
  width: 100%;
  padding-left: 12px;
`;

const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #ccc;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 14px 14px;
  height: 48px;
  background-color: #ececec;
  color: gray;
  border-radius: 3px;
`;

const OptionContainer = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 18px;
  height: 30px;
  & > * {
    flex: 1;
  }
`;

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
`;

const QuantityDropdown = styled.select`
  border: 1px solid #ccc;
  border-radius: 10px;
`;

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

function CartProductItem({ isChecked, handleCheckboxChange }) {
  const [quantity, setQuantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleQuantityChange = e => {
    setQuantity(e.target.value);
  };

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCancel = () => {
    setIsCartOpen(false);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionSelect = option => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };
  return (
    <ProductWrapper>
      <CheckboxContainer>
        <Checkbox
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </CheckboxContainer>
      <ColumnStyle>
        <ProductDetail>
          <ProductImage src={Accessary} alt="Product" />
          <ProductView>
            <div>상품이름</div>
            <div>
              <p>가격</p>
            </div>
          </ProductView>
          <RemoveButton>
            <FontAwesomeIcon icon={faXmark} />
          </RemoveButton>
        </ProductDetail>
        <ProductInfo>
          <div>색상/사이즈</div>
        </ProductInfo>
        <OptionContainer>
          <Button onClick={handleCartToggle}>옵션변경</Button>
          <QuantityDropdown value={quantity} onChange={handleQuantityChange}>
            {Array.from({ length: 100 }, (_, index) => {
              const value = index + 1;
              if (value < 100) {
                return (
                  <option key={value} value={value}>
                    {value}
                  </option>
                );
              }
              return null;
            })}
          </QuantityDropdown>
        </OptionContainer>
      </ColumnStyle>
      {isCartOpen && (
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
                  <DropdownMenuItem
                    onClick={() => handleOptionSelect("옵션 1")}
                  >
                    옵션 1
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleOptionSelect("옵션 2")}
                  >
                    옵션 2
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleOptionSelect("옵션 3")}
                  >
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
      )}
    </ProductWrapper>
  );
}

export default CartProductItem;
