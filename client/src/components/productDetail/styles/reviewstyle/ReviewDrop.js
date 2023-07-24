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

export const ReviewDrop = ({ reviewfilter, onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState(reviewfilter[0].slug); // 선택한 필터 값 상태 관리

  const handleFilterChange = event => {
    setSelectedFilter(event.target.value);
    onFilterChange(event.target.value); // 선택한 필터 값을 상위 컴포넌트로 전달
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
          <option value={reviewfilter[0].slug}>{reviewfilter[0].name}</option>
          <option value={reviewfilter[1].slug}>{reviewfilter[1].name}</option>
          <option value={reviewfilter[2].slug}>{reviewfilter[2].name}</option>
        </DropdownSelect>
      </DropdownContainer>
    </FilterContainer>
  );
};
