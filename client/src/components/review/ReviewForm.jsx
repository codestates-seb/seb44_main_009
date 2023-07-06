import { useState, useRef } from "react";
import { styled } from "styled-components";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewInputContainer = styled.div`
  margin: 100px 0 24px 0;
  position: relative;
`;

const ReviewInput = styled.textarea`
  width: 100%;
  height: 15%;
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

const SelectedImage = styled.img`
  max-width: 100%;
  height: 150px;
  margin-top: 12px;
`;

const ImageButton = styled.div`
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

const RemoveImageButton = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  z-index: 1;
  padding: 5px;
  background-color: rgba(79, 79, 79, 0.8);
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

function ReviewForm() {
  const [reviewText, setReviewText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleReviewChange = e => {
    setReviewText(e.target.value);
  };

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <>
      <ReviewInputContainer>
        <div>리뷰를 작성해주세요.</div>
        {selectedImage && (
          <>
            <SelectedImage src={selectedImage} alt="Selected Image" />
            <RemoveImageButton onClick={handleRemoveImage}>X</RemoveImageButton>
          </>
        )}
      </ReviewInputContainer>
      <ReviewInput value={reviewText} onChange={handleReviewChange} />
      <ImageButton onClick={handleImageUpload}>
        <FontAwesomeIcon icon={faImage} />
        <div>사진 첨부하기</div>
      </ImageButton>
      <HiddenFileInput
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </>
  );
}

export default ReviewForm;
