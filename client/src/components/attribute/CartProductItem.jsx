import { useState } from "react";
import { styled } from "styled-components";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accessary } from "../../image/index";
import CartOptionModal from "./CartOptionModal";

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

function CartProductItem({ isChecked, handleCheckboxChange }) {
  const [quantity, setQuantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleQuantityChange = e => {
    setQuantity(e.target.value);
  };

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCancel = () => {
    setIsCartOpen(false);
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
        <CartOptionModal isCartOpen={isCartOpen} handleCancel={handleCancel} />
      )}
    </ProductWrapper>
  );
}

export default CartProductItem;
