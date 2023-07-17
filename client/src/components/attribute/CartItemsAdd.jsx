import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { productsState } from "../../atoms/product";

function CartItemsAdd() {
  const products = useRecoilValue(productsState);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    const count = products.reduce(
      (total, product) => total + product.quantity,
      0,
    );
    setCartItemsCount(count);
  }, [products]);

  return cartItemsCount;
}

export default CartItemsAdd;
