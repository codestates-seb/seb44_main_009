import { PurchasedInfoDetail } from "../styles/PurchasedInfoDetail";
import { PurchasedInfoTitle } from "../styles/PurchasedInfoTitle";

export default function PurchasedPrice({ price }) {
  return (
    <div>
      <PurchasedInfoTitle>가격: </PurchasedInfoTitle>
      <PurchasedInfoDetail>{price}</PurchasedInfoDetail>
    </div>
  );
}
