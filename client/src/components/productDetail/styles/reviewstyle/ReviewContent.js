import { styled } from "styled-components";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

import {
  ReviewHeaderContainer,
  ReviewContainer,
  ReviewFormDiv,
  AuthorInfoContainer,
  ReviewInfo,
  ProfileImage,
  Nickname,
  PostDate,
  StarRatingContainer,
  Liking,
  Star,
  ReviewImage,
  PersonalInfoDiv,
  PersonalInfoText,
  ReiviewText,
  RecommendationForm,
  RecommendationButton,
} from "./reviewContentstyle";

const RecommendationCount = styled.span`
  margin-left: 16px;
`;

const StarRatingForm = ({ readOnly, rating }) => {
  return (
    <StarRatingContainer>
      <Liking>만족도 : </Liking>
      {[1, 2, 3, 4, 5].map(value => (
        <Star
          key={value}
          filled={value <= rating ? "true" : "false"}
          readOnly={readOnly}
        >
          ★
        </Star>
      ))}
    </StarRatingContainer>
  );
};

const RecoForm = ({ vote }) => {
  const [recommendation, setRecommendation] = useState(vote);
  const [isRecommended, setIsRecommended] = useState(false);

  const handleRecommendation = () => {
    if (!isRecommended) {
      setRecommendation(recommendation + 1);
      setIsRecommended(true);
    }
  };

  return (
    <RecommendationForm>
      <RecommendationButton
        onClick={handleRecommendation}
        disabled={isRecommended}
      >
        추천
      </RecommendationButton>
      <RecommendationCount>
        {vote + (isRecommended ? 1 : 0)}
      </RecommendationCount>
    </RecommendationForm>
  );
};

export const ReviewContent = ({ review }) => {
  const {
    memberName,
    productName,
    productColorStatus,
    productPersonalColor,
    productPersonalColorStatus,
    sizeStatus,
    content,
    vote,
    createdAt,
    reviewImageName,
  } = review;

  const time = { createdAt };
  const timeString = time.createdAt.toString();
  const dateOnly = timeString.slice(0, 10);

  return (
    <ReviewContainer>
      <ReviewHeaderContainer>
        <ReviewFormDiv>
          <ProfileImage src="https://cdn.discordapp.com/attachments/1123429312377397379/1131816695690960967/profile_image_default.jpg"></ProfileImage>
          <ReviewInfo>
            <StarRatingForm readOnly rating={3}></StarRatingForm>
            <AuthorInfoContainer>
              <Nickname>
                {memberName}{" "}
                <FontAwesomeIcon
                  icon={faPalette}
                  style={{
                    fontSize: "18px",
                    color:
                      productPersonalColor === "COOL_TONE" ? "pink" : "orange",
                  }}
                />
                {"  "}| {productName}
              </Nickname>
            </AuthorInfoContainer>
            <PostDate>{dateOnly}</PostDate>
          </ReviewInfo>
        </ReviewFormDiv>

        <RecoForm vote={vote}></RecoForm>
      </ReviewHeaderContainer>
      <ReviewImage src={reviewImageName}></ReviewImage>
      <PersonalInfoDiv>
        <PersonalInfoText>
          상품 퍼스널 컬러 :{"  "}
          <ReiviewText>{productPersonalColorStatus}</ReiviewText>
        </PersonalInfoText>
        <PersonalInfoText>
          사이즈 후기 : <ReiviewText>{sizeStatus}</ReiviewText>
        </PersonalInfoText>
        <PersonalInfoText>
          색상 상태 : <ReiviewText>{productColorStatus}</ReiviewText>
        </PersonalInfoText>
        <PersonalInfoText>
          후기 : <ReiviewText>{content}</ReiviewText>
        </PersonalInfoText>
      </PersonalInfoDiv>
    </ReviewContainer>
  );
};
