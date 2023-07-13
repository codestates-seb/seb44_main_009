import { useState } from "react";
import { styled } from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
`;
const DropdownContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`;

const DropdownLabel = styled.label`
  margin-right: 5px;
  font-size: 24px;
  padding: 5px;
`;

const DropdownSelect = styled.select`
  padding: 5px;
  width: 120px;
  height: 40px;
  font-size: 18px;
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 30px;
`;

const ToggleButton = styled.button`
  padding: 10px 15px;
  background-color: ${({ active }) => (active ? "green" : "gray")};
  color: white;
  border: none;
  border-radius: 50px;
  margin-right: 5px;
`;

const PersonalColorReviews = styled.span`
  font-size: 24px;
`;

const ReviewList = styled.div`
  /* 리뷰 목록 스타일*/
`;

export const ReviewDrop = () => {
  const [selectedFilter, setSelectedFilter] = useState("latest"); // 선택한 필터 값 상태 관리

  const handleFilterChange = event => {
    setSelectedFilter(event.target.value);
    // 필터링 작업 수행 및 결과 업데이트
  };

  const [showPersonalColorReviews, setShowPersonalColorReviews] =
    useState(false);

  const handleToggleClick = () => {
    setShowPersonalColorReviews(!showPersonalColorReviews);
  };

  return (
    <FilterContainer>
      <ToggleContainer>
        <ToggleButton
          active={showPersonalColorReviews}
          onClick={handleToggleClick}
        >
          {showPersonalColorReviews ? "ON" : "OFF"}
        </ToggleButton>
        <PersonalColorReviews>내 퍼스널 컬러 리뷰 보기</PersonalColorReviews>
      </ToggleContainer>

      <DropdownContainer>
        <DropdownLabel htmlFor="filter">필터 </DropdownLabel>
        <DropdownSelect
          id="filter"
          onChange={handleFilterChange}
          value={selectedFilter}
        >
          <option value="latest">최신순</option>
          <option value="recommend">추천순</option>
        </DropdownSelect>
      </DropdownContainer>

      <ReviewList>{/* 리뷰 목록 */}</ReviewList>
    </FilterContainer>
  );
};
