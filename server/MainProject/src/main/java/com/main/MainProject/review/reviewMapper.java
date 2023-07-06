package com.main.MainProject.review;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface reviewMapper {
    Review reviewDtoToReview(reviewDto reviewDto);
    reviewDto reviewToReviewDto(Review review);
}
