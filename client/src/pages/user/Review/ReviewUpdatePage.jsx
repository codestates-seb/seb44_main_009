import ReviewForm from "../../../components/review/ReviewForm";
import Header_back from "../../../components/header/Header_back";
import Footer_oneBtn from "../../../components/footer/Footer_oneBtn";
import { styled } from "styled-components";

const ReviewContainer = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ReviewWrapper = styled.div`
  width: 834px;
  padding: 0 12px 0 12px;
  border: 1px solid #383838;
  flex: 1;
  overflow-y: auto;
`;
const Title = styled.div`
  padding: 24px 0 24px 0;
  display: flex;
  font-size: 18px;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  margin: 16px 0 16px 0;
  display: flex;

  button {
    flex: 1;
    border: 1px solid #383838;
    border-radius: 20px 0 0 20px;
    background-color: #fff;
    color: #383838;
    font-size: 18px;
    cursor: pointer;
    padding: 8px 16px;
    margin-right: 8px;

    &:hover {
      background-color: #383838;
      color: #fff;
      transition: 0.6s;
    }

    &:nth-child(2) {
      border-radius: 0;
    }

    &:last-child {
      border-radius: 0 20px 20px 0;
    }
  }
`;

const DoubleButton = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  margin-right: 8px;
  border: 1px solid #383838;
  border-radius: 20px 0 0 20px;
  border: 1px solid #383838;
  background-color: #fff;
  color: #383838;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #383838;
    color: #fff;
    transition: 0.6s;
  }

  &:last-child {
    margin-right: 0;
    border-radius: 0 20px 20px 0;
  }
`;

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  background-color: #fff;
`;
function ReviewUpdatePage() {
  return (
    <ReviewContainer>
      <Header_back />
      <ReviewWrapper>
        <Title>리뷰 등록</Title>
        <div>
          <div>구매하신 상품은 만족하시나요?</div>
        </div>
        <div>
          <ButtonContainer>
            <DoubleButton>별로예요</DoubleButton>
            <DoubleButton>만족해요</DoubleButton>
          </ButtonContainer>
        </div>
        <div>
          <div>색상은 어떤가요?</div>
        </div>
        <div>
          <ButtonContainer>
            <DoubleButton>웜톤</DoubleButton>
            <DoubleButton>쿨톤</DoubleButton>
          </ButtonContainer>
        </div>
        <div>
          <div>사이즈는 어떤가요?</div>
        </div>
        <ButtonContainer>
          <button>작아요</button>
          <button>별로예요</button>
          <button>커요</button>
        </ButtonContainer>
        <ReviewForm />
      </ReviewWrapper>
      <FooterContainer>
        <Footer_oneBtn text="리뷰 등록하기" />
      </FooterContainer>
    </ReviewContainer>
  );
}

export default ReviewUpdatePage;
