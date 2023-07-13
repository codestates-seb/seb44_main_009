import { useContext } from "react";
import { MyListContext } from "../MyList";
import { ListAmount } from "../styles/ListAmount";
import { ListTitle } from "../styles/ListTitle";
import { MyListWrapper } from "../styles/MyListWrapper";

export default function MyReviews() {
  const { userReviewList } = useContext(MyListContext);

  return (
    <MyListWrapper>
      <ListTitle to="/review/management">나의 리뷰</ListTitle>
      <ListAmount>{userReviewList.totalCount}</ListAmount>
    </MyListWrapper>
  );
}
