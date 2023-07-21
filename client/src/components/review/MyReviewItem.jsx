import { Prepare } from "../../image";
import { ProductImage } from "../attribute/styles/ProdcutImage.styled";
import { ProductDetail } from "../attribute/styles/ProductDetail.styled";
import { ProductView } from "../attribute/styles/ProductView.styled";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { ReviewItemContainer } from "./styles/myreview/ReviewItemContainer.styled";
import { VoteIcon } from "./styles/myreview/StarIcon.styled";
import { ButtonWrapper } from "./styles/myreview/ButtonWrapper.styled";
import { Button } from "./styles/myreview/Button.styled";
import { Score } from "./styles/myreview/Score.styled";

function MyReviewItem({ review }) {
  return (
    <ReviewItemContainer>
      <ProductDetail>
        <ProductImage src={Prepare} alt="Product" />
        <ProductView>
          <h2>{review.productName}</h2>
          <p>{review.content}</p>
          <VoteIcon icon={faThumbsUp} />
          <Score>{review.vote}</Score>
        </ProductView>
        <ButtonWrapper>
          <Button>수정</Button>
          <Button>삭제</Button>
        </ButtonWrapper>
      </ProductDetail>
    </ReviewItemContainer>
  );
}

export default MyReviewItem;
