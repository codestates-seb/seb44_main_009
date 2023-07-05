import PurchasedImg from "./purchasedImg/PurchasedImg";
import PurchasedName from "./purchasedName/PurchasedName";
import PurchasedPrice from "./purchasedPrice/PurchasedPrice";
import PurchasedReviewBtn from "./purchasedReviewBtn/PurchasedReviewBtn";
import { PurchasedContainer } from "./styles/PurchasedContainer";

export default function Purchased({ children }) {
  return (
    <>
      <PurchasedContainer>{children}</PurchasedContainer>
    </>
  );
}

Purchased.Img = PurchasedImg;
Purchased.Name = PurchasedName;
Purchased.Price = PurchasedPrice;
Purchased.ReviewBtn = PurchasedReviewBtn;
