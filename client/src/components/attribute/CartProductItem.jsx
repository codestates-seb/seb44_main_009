import { useState } from "react";
// import axios from "axios";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import { Prepare } from "../../image";

function CartProductItem({
  product,
  updateCartItemQuantity,
  isChecked,
  handleCheckboxChange,
}) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const [products, setProducts] = useState(cart.cartProductList);

  // const handleRemove = () => {
  //   axios
  //     .delete(`/carts/${cart.id}/items/${product.productId}`)
  //     .then(res => {
  //       const updatedProducts = products.filter(
  //         item => item.productId !== product.productId,
  //       );
  //       setProducts(updatedProducts);
  //     })
  //     .catch(error => {
  //       console.error("error");
  //     });
  // };

  const [bChecked, setChecked] = useState(isChecked);

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    handleCheckboxChange(product.cartProductId, target.checked);
  };

  const handleQuantityChange = e => {
    const newQuantity = e.target.value;
    updateCartItemQuantity(product.cartProductId, newQuantity);
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
          onChange={e => checkHandler(e)}
        />
      </CheckboxWrapper>
      <ColumnStyle>
        <ProductDetail>
          <ProductImage src={Prepare} alt="Product" />
          <ProductView>
            <div>{product.productName}</div>
            <div>
              <p>{product.productPrice}</p>
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
            value={product.quantity}
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
