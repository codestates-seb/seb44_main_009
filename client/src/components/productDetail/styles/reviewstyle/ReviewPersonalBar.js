import {
  Margin,
  PersonalBar,
  PersonalPercentBar,
  PersonalBarContainer,
} from "./reviewContentstyle";

export const ReviewPersonalBar = ({ coolToneCount, warmToneCount }) => {
  const totalReviews = warmToneCount + coolToneCount;

  const warmTonePercentage = (warmToneCount / totalReviews) * 100;
  const coolTonePercentage = (coolToneCount / totalReviews) * 100;
  console.log(coolTonePercentage);
  return (
    <PersonalBarContainer>
      퍼스널 컬러 리뷰 비율
      <PersonalPercentBar>
        <PersonalBar
          style={{ backgroundColor: "orange", width: `${warmTonePercentage}%` }}
        >
          <Margin>Warm</Margin>
        </PersonalBar>
        <PersonalBar
          style={{
            backgroundColor: "pink",
            width: `${coolTonePercentage}%`,
          }}
        >
          <Margin>Cool</Margin>
        </PersonalBar>
      </PersonalPercentBar>
    </PersonalBarContainer>
  );
};
