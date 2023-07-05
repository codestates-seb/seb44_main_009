import { ListAmount } from "../styles/ListAmount";
import { ListTitle } from "../styles/ListTitle";
import { MyListWrapper } from "../styles/MyListWrapper";

export default function MyOrders() {
  return (
    <MyListWrapper>
      <ListTitle>주문 내역</ListTitle>
      <ListAmount>0</ListAmount>
    </MyListWrapper>
  );
}
