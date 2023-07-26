import { useState, useRef } from "react";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReviewInputContainer } from "./styles/ReviewInputContainer.styled";
import { ReviewInput } from "./styles/ReviewInput.styled";
import { HiddenFileInput } from "./styles/HiddenFileInput.styled";
import { SelectedImage } from "./styles/SelectedImage.styled";
import { ImageButton } from "./styles/ImageButton.styled";
import { RemoveImageButton } from "./styles/RemoveImageButton.styled";
import { InputErrorMessage } from "./styles/InputErrorMessage.styled";

function ReviewForm({ value, onChange, onImageFileChange }) {
  const [reviewText, setReviewText] = useState(value);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleReviewChange = e => {
    const value = e.target.value;
    setReviewText(value);
    onChange(e);
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
    onImageFileChange(file);
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
      {reviewText.length === 0 && (
        <InputErrorMessage>내용을 입력하세요.</InputErrorMessage>
      )}
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
