import { createContext, useEffect, useState } from "react";
import PurchasedImg from "./purchasedImg/PurchasedImg";
import PurchasedName from "./purchasedName/PurchasedName";
import PurchasedPrice from "./purchasedPrice/PurchasedPrice";
import PurchasedReviewBtn from "./purchasedReviewBtn/PurchasedReviewBtn";
import { PurchasedContainer } from "./styles/PurchasedContainer";
import {
  getUserBuyList,
  getUserBuyProdutList,
} from "../../../../../../api/userAPI";
import { PurchasedWraaper } from "./styles/PurchasedWraaper";

// Context >> 생성
export const PurchasedContext = createContext();

export default function Purchased() {
  const [purchasedProductList, setPurchasedProductList] = useState(null);
  const [purchasedProduct, setPurchasedProduct] = useState(null);

  console.log("purchasedProductList", purchasedProductList);
  console.log("purchasedProduct", purchasedProduct);

  useEffect(() => {
    (async () => setPurchasedProductList(await getUserBuyList()))();
  }, []);

  useEffect(() => {
    if (purchasedProductList !== null) {
      const orderId =
        purchasedProductList[purchasedProductList.length - 1].orderId;
      (async () => setPurchasedProduct(await getUserBuyProdutList(orderId)))();
    }
  }, [purchasedProductList]);

  return (
    <>
      {purchasedProduct ? (
        <PurchasedContext.Provider value={{ purchasedProduct }}>
          {purchasedProduct.cartProductList.map((product, index) => (
            <PurchasedContainer key={index}>
              <PurchasedImg />
              <PurchasedWraaper>
                <PurchasedName name={product.productName} />
                <PurchasedPrice price={product.productPrice} />
              </PurchasedWraaper>
              <PurchasedReviewBtn />
            </PurchasedContainer>
          ))}
        </PurchasedContext.Provider>
      ) : null}
    </>
  );
}
