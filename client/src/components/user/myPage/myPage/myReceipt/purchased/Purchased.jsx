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
import { useRecoilValue } from "recoil";
import { auth } from "../../../../../../atoms/auth";
import { NoProductsContainer } from "./styles/NoProductsContainer.styled";

// Context >> 생성
export const PurchasedContext = createContext();

export default function Purchased() {
  // recoil >> auth.token
  const { token } = useRecoilValue(auth);

  const [purchasedProductList, setPurchasedProductList] = useState(null);
  const [purchasedProduct, setPurchasedProduct] = useState(null);

  useEffect(() => {
    (async () => setPurchasedProductList(await getUserBuyList(token)))();
  }, []);

  useEffect(() => {
    if (purchasedProductList !== null && purchasedProductList.length > 0) {
      const orderId =
        purchasedProductList[purchasedProductList.length - 1].orderId;
      (async () =>
        setPurchasedProduct(await getUserBuyProdutList(orderId, token)))();
    }
  }, [purchasedProductList]);

  return (
    <>
      {purchasedProduct && purchasedProduct.cartProductList.length !== 0 ? (
        <PurchasedContext.Provider value={{ purchasedProduct }}>
          {purchasedProduct.cartProductList.map((product, index) => (
            <PurchasedContainer key={index}>
              <PurchasedImg />
              <PurchasedWraaper>
                <PurchasedName name={product.productName} />
                <PurchasedPrice price={product.productPrice} />
              </PurchasedWraaper>
              {product.reviewStatus === "POSSIBLE_REVIEW" ? (
                <PurchasedReviewBtn
                  orderId={purchasedProduct.orderId}
                  productId={product.productId}
                />
              ) : null}
            </PurchasedContainer>
          ))}
        </PurchasedContext.Provider>
      ) : (
        <NoProductsContainer>구매한 이력이 없습니다.</NoProductsContainer>
      )}
    </>
  );
}
