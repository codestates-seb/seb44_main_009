import { Accessary } from "../../image/index";
import { ProductImage } from "../attribute/styles/ProdcutImage.styled";
import { ProductDetail } from "../attribute/styles/ProductDetail.styled";
import { ProductView } from "../attribute/styles/ProductView.styled";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ReviewItemContainer } from "./styles/myreview/ReviewItemContainer.styled";
import { StarIcon } from "./styles/myreview/StarIcon.styled";
import { ButtonWrapper } from "./styles/myreview/ButtonWrapper.styled";
import { Button } from "./styles/myreview/Button.styled";
import { Score } from "./styles/myreview/Score.styled";

function MyReviewItem({ review }) {
  return (
    <ReviewItemContainer>
      <ProductDetail>
        <ProductImage src={Accessary} alt="Product" />
        <ProductView>
          <h2>{review.title}</h2>
          <p>{review.content}</p>
          <StarIcon icon={faStar} />
          <Score>{review.score}</Score>
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
