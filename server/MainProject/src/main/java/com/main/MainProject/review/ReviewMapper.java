package com.main.MainProject.review;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ReviewMapper {
    Review reviewDtoToReview(ReviewDto.RequestDTO reviewDto);
    @Mapping(source = "member.nickName", target = "memberName")
    ReviewDto.Response reviewToResponse(Review review);

    List<ReviewDto.Response> reviewListToResponses(List<Review> reviewList);
}