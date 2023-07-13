// eslint-disable-next-line no-unused-vars
import { createContext, useEffect, useState } from "react";
import PurchasedImg from "./purchasedImg/PurchasedImg";
import PurchasedName from "./purchasedName/PurchasedName";
import PurchasedPrice from "./purchasedPrice/PurchasedPrice";
import PurchasedReviewBtn from "./purchasedReviewBtn/PurchasedReviewBtn";
import { PurchasedContainer } from "./styles/PurchasedContainer";
// eslint-disable-next-line no-unused-vars
import { getUserBuyProdutList } from "../../../../../../api/userAPI";

// Context >> 생성
export const PurchasedContext = createContext();

export default function Purchased({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [purchasedProducts, setPurchasedProducts] = useState();

  // :: useEffect(() => {
  //   (async () => setPurchasedProducts(await getUserBuyProdutList()))();
  // }, []);

  return (
    <>
      {/* {purchasedProducts ? ( */}
      <PurchasedContext.Provider value={{ purchasedProducts }}>
        <PurchasedContainer>{children}</PurchasedContainer>
      </PurchasedContext.Provider>
      {/* ) : null} */}
    </>
  );
}

Purchased.Img = PurchasedImg;
Purchased.Name = PurchasedName;
Purchased.Price = PurchasedPrice;
Purchased.ReviewBtn = PurchasedReviewBtn;
