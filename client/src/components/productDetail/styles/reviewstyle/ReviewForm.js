import { styled } from "styled-components";
import { useState } from "react";
const ReviewHeaderContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;
const ReviewContainer = styled.div`
  width: 100%;
  border: 3px solid black;
  display: flex;
  justify-content: start;
  align-items: start;

  flex-direction: column;
`;

const ReviewFormDiv = styled.div`
  // border: 2px solid black;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: 20px;
`;

const AuthorInfoContainer = styled.div`
  // 닉네임 + 날짜
  max-width: 250px;
  margin-top: 10px;
`;
const ReviewInfo = styled.div`
  margin-left: 30px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
`;

// 프로필 이미지
const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 2px solid red;
`;

//닉네임
const Nickname = styled.span`
  font-size: 18px;
`;

// 날짜
const PostDate = styled.time`
  font-size: 18px;
`;

// 만족도
const StarRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const Liking = styled.span`
  font-size: 24px;
`;

const Star = styled.span`
  cursor: ${props => (props.readOnly ? "default" : "pointer")};
  color: ${props => (props.filled === "true" ? "gold" : "gray")};
`;

// 리뷰 이미지
const ReviewImage = styled.img`
  /* 이미지 스타일링 */
  width: 200px;
  height: 164px;
  margin-left: 50px;
  margin-bottom: 20px;
`;

const PersonalInfoDiv = styled.div`
  width: 100%;
  height: 200px;

  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding: 8px;
  margin-bottom: 150px;
`;
const PersonalInfoText = styled.div`
  width: 100%;
  color: gray;
  font-weight: 600;
  margin: 8px;
  margin-left: 40px;
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

// 추천
const RecommendationForm = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  justify-content: end;
  margin-right: 20px;
`;

const RecommendationButton = styled.button`
  width: 65px;
  padding: 8px 16px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const RecommendationCount = styled.span`
  margin-left: 16px;
`;

const RecoForm = () => {
  const [recommendation, setRecommendation] = useState(0);
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

export const ReviewForm = () => {
  return (
    <ReviewContainer>
      <ReviewHeaderContainer>
        <ReviewFormDiv>
          <ProfileImage></ProfileImage>
          <ReviewInfo>
            <StarRatingForm readOnly rating={3}></StarRatingForm>
            <AuthorInfoContainer>
              <Nickname>JuAhLee | </Nickname>
              <PostDate dateTime={formattedDate}>
                {date.toLocaleDateString()}
              </PostDate>
            </AuthorInfoContainer>
          </ReviewInfo>
        </ReviewFormDiv>

        <RecoForm></RecoForm>
      </ReviewHeaderContainer>
      <ReviewImage></ReviewImage>
      <PersonalInfoDiv>
        <PersonalInfoText>퍼스널 컬러 </PersonalInfoText>
        <PersonalInfoText>사이즈</PersonalInfoText>
        <PersonalInfoText>색상</PersonalInfoText>
        <PersonalInfoText>후기</PersonalInfoText>
      </PersonalInfoDiv>
    </ReviewContainer>
  );
};
