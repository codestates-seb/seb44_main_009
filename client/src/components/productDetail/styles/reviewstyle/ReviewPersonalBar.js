import {
  Margin,
  PersonalBar,
  PersonalPercentBar,
  PersonalBarContainer,
} from "./reviewContentstyle";

export const ReviewPersonalBar = ({ coolToneCount, warmToneCount }) => {
  const totalReviews = warmToneCount + coolToneCount;

  const warmTonePercentage =
    totalReviews === 0 ? 0 : (warmToneCount / totalReviews) * 100;
  const coolTonePercentage =
    totalReviews === 0 ? 0 : (coolToneCount / totalReviews) * 100;

  return (
    <PersonalBarContainer>
      퍼스널 컬러 리뷰 비율
      <PersonalPercentBar>
        <PersonalBar
          style={{ backgroundColor: "orange", width: `${warmTonePercentage}%` }}
        >
          {totalReviews > 0 && <Margin>Warm</Margin>}
        </PersonalBar>
        <PersonalBar
          style={{
            backgroundColor: "pink",
            width: `${coolTonePercentage}%`,
          }}
        >
          {totalReviews > 0 && <Margin>Cool</Margin>}
        </PersonalBar>
      </PersonalPercentBar>
    </PersonalBarContainer>
  );
};
