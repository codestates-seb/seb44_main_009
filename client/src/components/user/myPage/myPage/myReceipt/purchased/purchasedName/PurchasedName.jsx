import { PurchasedInfoDetail } from "../styles/PurchasedInfoDetail";
import { PurchasedInfoTitle } from "../styles/PurchasedInfoTitle";

export default function PurchasedName({ name }) {
  return (
    <div>
      <PurchasedInfoTitle>상품명: </PurchasedInfoTitle>
      <PurchasedInfoDetail>{name}</PurchasedInfoDetail>
    </div>
  );
}
