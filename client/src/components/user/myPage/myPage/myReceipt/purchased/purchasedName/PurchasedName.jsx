import { PurchasedInfoDetail } from "../styles/PurchasedInfoDetail";
import { PurchasedInfoTitle } from "../styles/PurchasedInfoTitle";

export default function PurchasedName() {
  return (
    <div>
      <PurchasedInfoTitle>상품명: </PurchasedInfoTitle>
      <PurchasedInfoDetail>맨투맨</PurchasedInfoDetail>
    </div>
  );
}
