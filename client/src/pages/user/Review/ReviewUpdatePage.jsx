import ReviewForm from "../../../components/review/ReviewForm";
import Header_back from "../../../components/header/Header_back";
import Footer_oneBtn from "../../../components/footer/Footer_oneBtn";
import ReviewSection from "../../../components/review/ReviewSection";
import { styled } from "styled-components";

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 1000px;
`;

const ReviewWrapper = styled.div`
  width: 834px;
  height: 100%;
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
        <ReviewSection
          title="구매하신 상품은 만족하시나요?"
          options={["별로예요", "만족해요"]}
        />
        <ReviewSection title="색상은 어떤가요?" options={["웜톤", "쿨톤"]} />
        <ReviewSection
          title="사이즈는 어떤가요?"
          options={["작아요", "잘 맞아요", "커요"]}
        />
        <ReviewForm />
      </ReviewWrapper>
      <FooterContainer>
        <Footer_oneBtn text="리뷰 등록하기" />
      </FooterContainer>
    </ReviewContainer>
  );
}

export default ReviewUpdatePage;
