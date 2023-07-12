package com.main.MainProject.review.mapper;

import com.main.MainProject.review.dto.ReviewDto;
import com.main.MainProject.review.entity.Review;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ReviewMapper {
    Review reviewDtoToReview(ReviewDto.RequestDTO reviewDto);

    @Mapping(source = "member.nickName", target = "memberName")
    @Mapping(source = "product.personalColor", target = "productPersonalColor")
    @Mapping(source = "product.colors", target = "colors")
    @Mapping(source = "product.name", target = "productName")
    ReviewDto.Response reviewToResponse(Review review);


    default ReviewDto.ResponseList reviewListToResponses(List<Review> reviewList) {

        List<ReviewDto.Response> responseList = reviewList.stream().map(review -> reviewToResponse(review)).collect(Collectors.toList());

        int totalCount = responseList.size();
        int personalColorCoolCount = (int) reviewList.stream()
                .filter(review -> review.getProductPersonalColorStatus() == Review.ProductPersonalColorStatus.COOL)
                .count();
        int PersonalColorWormCount = (int) reviewList.stream()
                .filter(review -> review.getProductPersonalColorStatus() == Review.ProductPersonalColorStatus.WORM)
                .count();

         ReviewDto.ResponseList response =
                new ReviewDto.ResponseList(responseList, totalCount, personalColorCoolCount, PersonalColorWormCount);

         return response;
    }


}
