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
  //console.log(recommendation);

  return (
    <RecommendationForm>
      <RecommendationButton
        onClick={handleRecommendation}
        disabled={isRecommended}
      >
        추천
      </RecommendationButton>
      <RecommendationCount>{recommendation}</RecommendationCount>
    </RecommendationForm>
  );
};

const date = new Date(); // 날짜 데이터 가져오기
const formattedDate = date.toISOString(); // ISO 8601 형식으로 변환

export const ReviewContent = ({ review }) => {
  const {
    memberName,
    productName,
    productColor,
    productPersonalColor,

    productPersonalColorStatus,
    sizeStatus,
    content,
    vote,
  } = review;

  return (
    <ReviewContainer>
      <ReviewHeaderContainer>
        <ReviewFormDiv>
          <ProfileImage></ProfileImage>
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
            <PostDate dateTime={formattedDate}>
              {date.toLocaleDateString()}
            </PostDate>
          </ReviewInfo>
        </ReviewFormDiv>

        <RecoForm vote={vote}></RecoForm>
      </ReviewHeaderContainer>
      <ReviewImage></ReviewImage>
      <PersonalInfoDiv>
        <PersonalInfoText>
          상품 퍼스널 컬러 :{" "}
          <ReiviewText>{productPersonalColorStatus}</ReiviewText>
        </PersonalInfoText>
        <PersonalInfoText>
          사이즈 후기 : <ReiviewText>{sizeStatus}</ReiviewText>
        </PersonalInfoText>
        <PersonalInfoText>
          색상 : <ReiviewText>{productColor}</ReiviewText>
        </PersonalInfoText>
        <PersonalInfoText>
          후기 : <ReiviewText>{content}</ReiviewText>
        </PersonalInfoText>
      </PersonalInfoDiv>
    </ReviewContainer>
  );
};
