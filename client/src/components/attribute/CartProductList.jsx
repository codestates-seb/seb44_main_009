import CartProductItem from "./CartProductItem";

function CartProductList({ cartProductList, isChecked, handleCheckboxChange }) {
  return (
    <div>
      {cartProductList.map(product => (
        <CartProductItem
          key={product.id}
          isChecked={isChecked}
          handleCheckboxChange={handleCheckboxChange}
          product={product}
        />
      ))}
    </div>
  );
}

export default CartProductList;
