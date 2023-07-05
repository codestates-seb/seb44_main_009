import { PurchasedInfoDetail } from "../styles/PurchasedInfoDetail";
import { PurchasedInfoTitle } from "../styles/PurchasedInfoTitle";

export default function PurchasedPrice() {
  return (
    <div>
      <PurchasedInfoTitle>가격: </PurchasedInfoTitle>
      <PurchasedInfoDetail>18000원</PurchasedInfoDetail>
    </div>
  );
}
