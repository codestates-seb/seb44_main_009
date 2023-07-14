import { useContext } from "react";
import { ListAmount } from "../styles/ListAmount";
import { ListTitle } from "../styles/ListTitle";
import { MyListWrapper } from "../styles/MyListWrapper";
import { MyListContext } from "../MyList";

export default function MyOrders() {
  const { userBuyList } = useContext(MyListContext);

  return (
    <MyListWrapper>
      <ListTitle to="/preparing">주문 내역</ListTitle>
      <ListAmount>{userBuyList.length}</ListAmount>
    </MyListWrapper>
  );
}
