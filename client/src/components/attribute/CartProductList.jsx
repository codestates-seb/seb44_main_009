import CartProductItem from "./CartProductItem";

import { useState, useEffect } from "react";
import { CheckboxContainer } from "./styles/CheckboxContainer.styled";
import { CheckboxWrapper } from "./styles/CheckboxWrapper.styled";
import { Checkbox } from "./styles/Checkbox.styled";
import { DeleteSection } from "./styles/DeleteSection.styled";

function CartProductList({ cart, updateCartItemQuantity }) {
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [isAllChecked, setIsAllChecked] = useState(false);

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
    } else {
      checkedItems.delete(id);
    }
    setCheckedItems(new Set(checkedItems));
  };

  const isAllItemsChecked = () => {
    return cart.cartProductList.every(product =>
      checkedItems.has(product.cartProductId),
    );
  };
  useEffect(() => {
    setIsAllChecked(isAllItemsChecked());
  }, [checkedItems, cart.cartProductList]);

  const toggleSelectAll = () => {
    if (isAllChecked) {
      setCheckedItems(new Set());
    } else {
      setCheckedItems(
        new Set(cart.cartProductList.map(({ cartProductId }) => cartProductId)),
      );
    }
    setIsAllChecked(!isAllChecked);
  };

  return (
    <>
      <CheckboxContainer>
        <CheckboxWrapper>
          <Checkbox
            type="checkbox"
            checked={isAllChecked}
            onChange={toggleSelectAll}
          />
          <p>
            {isAllChecked
              ? `전체선택 (${cart.cartProductList.length}/${cart.cartProductList.length})`
              : `전체선택 (0/${cart.cartProductList.length})`}
          </p>
        </CheckboxWrapper>
        <DeleteSection>선택삭제</DeleteSection>
      </CheckboxContainer>
      {cart.cartProductList.map(product => (
        <CartProductItem
          key={product.cartProductId}
          product={product}
          isChecked={checkedItems.has(product.cartProductId)}
          handleCheckboxChange={checkedItemHandler}
          updateCartItemQuantity={updateCartItemQuantity}
          cart={cart}
        />
      ))}
    </>
  );
}

export default CartProductList;
