import CartProductItem from "./CartProductItem";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { CheckboxContainer } from "./styles/CheckboxContainer.styled";
import { CheckboxWrapper } from "./styles/CheckboxWrapper.styled";
import { Checkbox } from "./styles/Checkbox.styled";
import { DeleteSection } from "./styles/DeleteSection.styled";
import { deleteCart } from "../../api/orderAPIs";
import { useRecoilValue } from "recoil";
import { auth } from "../../atoms/auth";

function CartProductList({ cart, updateCartItemQuantity }) {
  const { token } = useRecoilValue(auth);
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [isAllChecked, setIsAllChecked] = useState(false);

  const deleteItem = () => {
    const selectedItems = Array.from(checkedItems);
    selectedItems.forEach(async () => {
      try {
        for (const cartProductId of selectedItems) {
          await deleteCart(token, cartProductId);
          navigate("/");
          console.log("성공");
        }
      } catch (error) {
        console.error("실패");
      }
    });
    setCheckedItems(new Set());
  };
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
              : `전체선택 (${checkedItems.size}/${cart.cartProductList.length})`}
          </p>
        </CheckboxWrapper>
        <DeleteSection onClick={deleteItem}>선택삭제</DeleteSection>
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
