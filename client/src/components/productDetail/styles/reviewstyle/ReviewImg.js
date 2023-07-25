import { styled } from "styled-components";
import { useState } from "react";

const PreviewContainer = styled.div`
  width: 100%; //
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  margin-top: 50px;
  margin-bottom: 50px;
`;

const PreviewImage = styled.div`
  width: 154px;
  height: 154px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
const PreviewAllImage = styled.div`
  width: 250px;
  height: 250px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ModalContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  max-width: 834px;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.4);
  z-index: 20; // ?
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 20px;

  max-height: 80%;
  background-color: #fff;
  padding: 25px;
  border-radius: 4px;
  border: solid 2px black;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  overflow: hidden;
  padding: 24px;

  overflow-y: scroll; /* Enable vertical scrolling */

  /* WebKit용 스크롤바 스타일 */
  /* &::-webkit-scrollbar {
    width: 0px; 
    background: transparent; 
  } */
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 36px;
  font-weight: 600;
`;

const reviewImages = [
  {
    src: "https://img.freepik.com/free-vector/background-of-coming-soon-with-a-clock_1017-5059.jpg?w=826&t=st=1688544622~exp=1688545222~hmac=9340ba92730b0d3c10f8db2ad9d60b2f564990234e283bac6fb44d2159e6aee0",
    alt: "리뷰 이미지 1",
  },
  {
    src: "https://img.freepik.com/free-vector/background-of-coming-soon-with-a-clock_1017-5059.jpg?w=826&t=st=1688544622~exp=1688545222~hmac=9340ba92730b0d3c10f8db2ad9d60b2f564990234e283bac6fb44d2159e6aee0",
    alt: "리뷰 이미지 2",
  },
  {
    src: "https://img.freepik.com/free-vector/background-of-coming-soon-with-a-clock_1017-5059.jpg?w=826&t=st=1688544622~exp=1688545222~hmac=9340ba92730b0d3c10f8db2ad9d60b2f564990234e283bac6fb44d2159e6aee0",
    alt: "리뷰 이미지 3",
  },
  {
    src: "https://img.freepik.com/free-vector/background-of-coming-soon-with-a-clock_1017-5059.jpg?w=826&t=st=1688544622~exp=1688545222~hmac=9340ba92730b0d3c10f8db2ad9d60b2f564990234e283bac6fb44d2159e6aee0",
    alt: "리뷰 이미지 4",
  },
  {
    src: "https://img.freepik.com/free-vector/background-of-coming-soon-with-a-clock_1017-5059.jpg?w=826&t=st=1688544622~exp=1688545222~hmac=9340ba92730b0d3c10f8db2ad9d60b2f564990234e283bac6fb44d2159e6aee0",
    alt: "리뷰 이미지 5",
  },
  {
    src: "https://img.freepik.com/free-vector/background-of-coming-soon-with-a-clock_1017-5059.jpg?w=826&t=st=1688544622~exp=1688545222~hmac=9340ba92730b0d3c10f8db2ad9d60b2f564990234e283bac6fb44d2159e6aee0",
    alt: "리뷰 이미지 6",
  },
  {
    src: "https://img.freepik.com/free-vector/background-of-coming-soon-with-a-clock_1017-5059.jpg?w=826&t=st=1688544622~exp=1688545222~hmac=9340ba92730b0d3c10f8db2ad9d60b2f564990234e283bac6fb44d2159e6aee0",
    alt: "리뷰 이미지 7",
  },
  {
    src: "https://img.freepik.com/free-vector/background-of-coming-soon-with-a-clock_1017-5059.jpg?w=826&t=st=1688544622~exp=1688545222~hmac=9340ba92730b0d3c10f8db2ad9d60b2f564990234e283bac6fb44d2159e6aee0",
    alt: "리뷰 이미지 8",
  },
  {
    src: "https://img.freepik.com/free-vector/background-of-coming-soon-with-a-clock_1017-5059.jpg?w=826&t=st=1688544622~exp=1688545222~hmac=9340ba92730b0d3c10f8db2ad9d60b2f564990234e283bac6fb44d2159e6aee0",
    alt: "리뷰 이미지 9",
  },
  {
    src: "https://img.freepik.com/free-vector/background-of-coming-soon-with-a-clock_1017-5059.jpg?w=826&t=st=1688544622~exp=1688545222~hmac=9340ba92730b0d3c10f8db2ad9d60b2f564990234e283bac6fb44d2159e6aee0",
    alt: "리뷰 이미지 10",
  },
];

export const ReviewImg = () => {
  const previewCenterImages = reviewImages.slice(0, 3);
  const [showModal, setShowModal] = useState(false);
  const [previewImages, setPreviewImages] = useState(previewCenterImages); // 리뷰 전체

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setPreviewImages(previewCenterImages);
  };

  const renderModalReviewImages = () => {
    if (showModal) {
      return (
        <>
          {reviewImages.map((image, index) => (
            <PreviewAllImage key={index}>
              <img src={image.src} alt={image.alt} />
            </PreviewAllImage>
          ))}
        </>
      );
    }
  }; // 모달에 나오는 이미지 전체

  const renderReviewImages = () => {
    return (
      <>
        {previewImages.map((image, index) => (
          <PreviewImage key={index}>
            <img src={image.src} alt={image.alt} />
          </PreviewImage>
        ))}
        {reviewImages.length > 3 ? (
          <PreviewImage onClick={handleShowModal}>
            <span>이미지 전체보기 +</span>
          </PreviewImage>
        ) : undefined}
      </>
    );
  }; // ReviewPage에 나오는 이미지 4개 자체

  return (
    <div>
      <PreviewContainer>{renderReviewImages()}</PreviewContainer>

      {showModal ? (
        <ModalContainer>
          <ModalOverlay>
            <ModalContent>
              <ModalCloseButton onClick={handleCloseModal}>X</ModalCloseButton>
              {renderModalReviewImages()}
            </ModalContent>
          </ModalOverlay>
        </ModalContainer>
      ) : undefined}
    </div>
  );
};
