import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accessary } from "../../image/index";
import CartOptionModal from "./CartOptionModal";
import CartQuantityDropdown from "./CartQuantityDropdown";
import { ProductWrapper } from "./styles/ProdcutWrapper.styled";
import { CheckboxContainer } from "./styles/CheckboxContainer.styled";
import { Checkbox } from "./styles/Checkbox.styled";
import { ColumnStyle } from "./styles/ColumnStyle.styled";
import { ProductDetail } from "./styles/ProductDetail.styled";
import { ProductImage } from "./styles/ProdcutImage.styled";
import { ProductView } from "./styles/ProductView.styled";
import { RemoveButton } from "./styles/RemoveButton.styled";
import { ProductInfo } from "./styles/ProductInfo.styled";
import { OptionContainer } from "./styles/OptionContainer.styled";
import { Button } from "./styles/Button.styled";

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
          <CartQuantityDropdown
            value={quantity}
            onChange={handleQuantityChange}
          />
        </OptionContainer>
      </ColumnStyle>
      {isCartOpen && (
        <CartOptionModal isCartOpen={isCartOpen} handleCancel={handleCancel} />
      )}
    </ProductWrapper>
  );
}

export default CartProductItem;
