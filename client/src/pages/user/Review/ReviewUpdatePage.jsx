import { useState, useRef } from "react";
import Header_back from "../../../components/header/Header_back";
import Footer_oneBtn from "../../../components/footer/Footer_oneBtn";
import { styled } from "styled-components";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const ReviewInputContainer = styled.div`
  margin: 100px 0 24px 0;
  position: relative;
`;

const ReviewInput = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 12px;
  margin-top: 24px;
  border: 1px solid #383838;
  border-radius: 4px;
  font-size: 18px;
  resize: vertical;
`;

const HiddenFileInput = styled.input`
  display: none;
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

const SelectedImage = styled.img`
  max-width: 100%;
  height: 150px;
  margin-top: 12px;
`;

const PhotoButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  background-color: #383838;
  color: #fff;
  border-radius: 20px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 18px;

  svg {
    margin-right: 8px;
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
  const [reviewText, setReviewText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleReviewChange = e => {
    setReviewText(e.target.value);
  };

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

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
        <ReviewInputContainer>
          <div>리뷰를 작성해주세요.</div>
          {selectedImage && (
            <SelectedImage src={selectedImage} alt="Selected Image" />
          )}
          <ReviewInput value={reviewText} onChange={handleReviewChange} />
        </ReviewInputContainer>
        <PhotoButton onClick={handleImageUpload}>
          <FontAwesomeIcon icon={faImage} />
          <div>사진 첨부하기</div>
        </PhotoButton>
        <HiddenFileInput
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </ReviewWrapper>
      <FooterContainer>
        <Footer_oneBtn text="리뷰 등록하기" />
      </FooterContainer>
    </ReviewContainer>
  );
}

export default ReviewUpdatePage;
