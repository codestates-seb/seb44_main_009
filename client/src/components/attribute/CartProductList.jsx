import CartProductItem from "./CartProductItem";

import { CheckboxContainer } from "./styles/CheckboxContainer.styled";
import { CheckboxWrapper } from "./styles/CheckboxWrapper.styled";
import { Checkbox } from "./styles/Checkbox.styled";
import { DeleteSection } from "./styles/DeleteSection.styled";

function CartProductList({
  cart,
  isChecked,
  handleCheckboxChange,
  updateCartItemQuantity,
}) {
  return (
    <>
      <CheckboxContainer>
        <CheckboxWrapper>
          <Checkbox
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p>{isChecked ? "전체선택(1/1)" : "전체선택(0/1)"}</p>
        </CheckboxWrapper>
        <DeleteSection>선택삭제</DeleteSection>
      </CheckboxContainer>
      {cart.cartProductList.map(product => (
        <CartProductItem
          key={product.productId}
          product={product}
          isChecked={isChecked}
          handleCheckboxChange={handleCheckboxChange}
          updateCartItemQuantity={updateCartItemQuantity}
          cart={cart}
        />
      ))}
    </>
  );
}

export default CartProductList;
