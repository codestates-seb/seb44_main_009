import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { useRecoilValue } from "recoil";
import { auth } from "../../atoms/auth";
import { deleteCart } from "../../api/orderAPIs";

function CartProductItem({
  product,
  updateCartItemQuantity,
  isChecked,
  handleCheckboxChange,
}) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { token } = useRecoilValue(auth);
  const navigate = useNavigate();

  const deleteItem = async () => {
    try {
      await deleteCart(token, product.cartProductId);
      navigate("/");
      console.log("성공");
    } catch (error) {
      console.error("실패");
    }
  };

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
          <RemoveButton onClick={deleteItem}>
            <FontAwesomeIcon icon={faXmark} />
          </RemoveButton>
        </ProductDetail>
        <ProductInfo>
          <div>
            {product.color}/{product.size}
          </div>
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
