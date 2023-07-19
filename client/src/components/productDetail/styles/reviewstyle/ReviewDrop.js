import { useState } from "react";

import {
  DropdownContainer,
  DropdownLabel,
  DropdownSelect,
  FilterContainer,
  PersonalColorReviews,
  ToggleButton,
  ToggleContainer,
} from "./reviewContentstyle";

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
    </FilterContainer>
  );
};
