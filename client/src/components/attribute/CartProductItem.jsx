import { useState } from "react";
import axios from "axios";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accessary } from "../../image/index";
import CartOptionModal from "./CartOptionModal";
import CartQuantityDropdown from "./CartQuantityDropdown";
import { ProductWrapper } from "./styles/ProdcutWrapper.styled";
import { Checkbox } from "./styles/Checkbox.styled";
import { ColumnStyle } from "./styles/ColumnStyle.styled";
import { ProductDetail } from "./styles/ProductDetail.styled";
import { ProductImage } from "./styles/ProdcutImage.styled";
import { ProductView } from "./styles/ProductView.styled";
import { RemoveButton } from "./styles/RemoveButton.styled";
import { ProductInfo } from "./styles/ProductInfo.styled";
import { OptionContainer } from "./styles/OptionContainer.styled";
import { Button } from "./styles/Button.styled";
import { CheckboxWrapper } from "./styles/CheckboxWrapper.styled";

function CartProductItem({ cart, isChecked, handleCheckboxChange, product }) {
  const [quantity, setQuantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState(cart.cartProductList);

  const handleRemove = () => {
    axios
      .delete(`/carts/${cart.id}/items/${product.productId}`)
      .then(res => {
        const updatedProducts = products.filter(
          item => item.productId !== product.productId,
        );
        setProducts(updatedProducts);
      })
      .catch(error => {
        console.error("error");
      });
  };

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
      <CheckboxWrapper>
        <Checkbox
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </CheckboxWrapper>
      <ColumnStyle>
        <ProductDetail>
          <ProductImage src={Accessary} alt="Product" />
          <ProductView>
            <div>{product?.name}</div>
            <div>
              <p>{product?.price}</p>
            </div>
          </ProductView>
          <RemoveButton onClick={handleRemove}>
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
