import { ReviewButton } from "./styles/PurchasedReviewButton";
import { ReviewButtonWrapper } from "./styles/ReviewButtonWrapper";

export default function PurchasedReviewBtn({ orderId, productId }) {
  return (
    <ReviewButtonWrapper>
      <ReviewButton to={`/review/${orderId}/${productId}`}>
        리뷰 등록
      </ReviewButton>
    </ReviewButtonWrapper>
  );
}
