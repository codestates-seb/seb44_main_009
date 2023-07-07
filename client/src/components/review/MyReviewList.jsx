import MyReviewItem from "./MyReviewItem";

function MyReviewList({ reviews }) {
  return (
    <div>
      {reviews.map(review => (
        <MyReviewItem key={review.reviewId} review={review} />
      ))}
    </div>
  );
}

export default MyReviewList;
