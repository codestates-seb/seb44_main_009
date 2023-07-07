package com.main.MainProject.review.mapper;

import com.main.MainProject.review.dto.ReviewDto;
import com.main.MainProject.review.entity.Review;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ReviewMapper {
    Review reviewDtoToReview(ReviewDto.RequestDTO reviewDto);
    @Mapping(source = "member.nickName", target = "memberName")
    @Mapping(source = "product.personalColor", target = "productPersonalColor")
    @Mapping(source = "product.color", target = "productColor")
    @Mapping(source = "product.name", target = "productName")
    ReviewDto.Response reviewToResponse(Review review);


    List<ReviewDto.Response> reviewListToResponses(List<Review> reviewList);
}
