import CartProductItem from "./CartProductItem";

function CartProductList({ cart, isChecked, handleCheckboxChange }) {
  return (
    <div>
      {cart.cartProductList.map(product => (
        <CartProductItem
          key={product.productId}
          product={product}
          isChecked={isChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
      ))}
    </div>
  );
}

export default CartProductList;
