import { ReviewButton } from "./styles/PurchasedReviewButton";
import { ReviewButtonWrapper } from "./styles/ReviewButtonWrapper";

export default function PurchasedReviewBtn() {
  return (
    <ReviewButtonWrapper>
      <ReviewButton to="/review">리뷰 쓰기</ReviewButton>
    </ReviewButtonWrapper>
  );
}
