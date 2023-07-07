import { Accessary } from "../../image/index";
import { ProductImage } from "../attribute/styles/ProdcutImage.styled";
import { ProductDetail } from "../attribute/styles/ProductDetail.styled";
import { ProductView } from "../attribute/styles/ProductView.styled";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const ReviewItemContainer = styled.div`
  border: 1px solid #383838;
  border-radius: 20px;
  padding: 24px;
`;

const StarIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  font-size: 20px;
  color: rgb(255, 81, 96);
`;
const ScoreText = styled.text`
  font-size: 20px;
`;
const ButtonContainer = styled.div`
  margin-top: 8px;
`;

const Button = styled.button`
  margin-top: 12px;
  width: 80px;
  height: 30px;
  background-color: #383838;
  color: #fff;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: gray;
    transition: 0.6s;
  }
`;

function MyReviewItem({ review }) {
  return (
    <ReviewItemContainer>
      <ProductDetail>
        <ProductImage src={Accessary} alt="Product" />
        <ProductView>
          <h2>{review.title}</h2>
          <p>{review.content}</p>
          <StarIcon icon={faStar} />
          <ScoreText>{review.score}</ScoreText>
        </ProductView>
        <ButtonContainer>
          <Button>수정</Button>
          <Button>삭제</Button>
        </ButtonContainer>
      </ProductDetail>
    </ReviewItemContainer>
  );
}

export default MyReviewItem;
