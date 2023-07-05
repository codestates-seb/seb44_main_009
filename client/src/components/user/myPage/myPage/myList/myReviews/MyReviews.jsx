import { ListAmount } from "../styles/ListAmount";
import { ListTitle } from "../styles/ListTitle";
import { MyListWrapper } from "../styles/MyListWrapper";

export default function MyReviews() {
  return (
    <MyListWrapper>
      <ListTitle>나의 리뷰</ListTitle>
      <ListAmount>0</ListAmount>
    </MyListWrapper>
  );
}
