package com.main.MainProject.review.controller;

import com.main.MainProject.auth.interceptor.JwtInterceptor;
import com.main.MainProject.dto.ListResponseDto;
import com.main.MainProject.dto.SingleResponseDto;
import com.main.MainProject.review.entity.Review;
import com.main.MainProject.review.dto.ReviewDto;
import com.main.MainProject.review.mapper.ReviewMapper;
import com.main.MainProject.review.service.ReviewService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/reviews")
@Slf4j
public class ReviewController {

    private final static String REVIEW_DEFAULT_URL = "/reviews";

    private final ReviewService reviewService;
    private final ReviewMapper mapper;

    public ReviewController(ReviewService reviewService, ReviewMapper mapper) {
        this.reviewService = reviewService;
        this.mapper = mapper;
    }

    //리뷰 생성
    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity createReview(@Positive @RequestParam long orderId,
                                       @Positive @RequestParam long productId,
                                       @Valid @RequestPart ReviewDto.RequestDTO requestBody,
                                       @RequestPart MultipartFile image) throws IOException {
        long memberId = JwtInterceptor.getAuthenticatedMemberId();

        Review review = reviewService.createReview(mapper.reviewDtoToReview(requestBody), orderId, productId, memberId, image);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.reviewToResponse(review)), HttpStatus.CREATED);
    }

    //리뷰 수정
    @PatchMapping(consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity updateReview(@Positive @RequestParam long reviewId,
                                       @Valid @RequestPart ReviewDto.RequestDTO requestBody,
                                       @RequestPart MultipartFile image) throws IOException {
        long memberId = JwtInterceptor.getAuthenticatedMemberId();

        Review review = reviewService.updateReview(reviewId, memberId, mapper.reviewDtoToReview(requestBody), image);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.reviewToResponse(review)), HttpStatus.OK);
    }

    @PatchMapping("/vote/{review-id}")
    public ResponseEntity updateReview(@PathVariable("review-id")long reviewId){
        Review review = reviewService.voteReview(reviewId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.reviewToResponse(review)), HttpStatus.OK);
    }

    //개별 리뷰 조회
    @GetMapping("/find/{review-id}")
    public ResponseEntity getReview(@PathVariable("review-id")long reviewId){
        Review review = reviewService.getReview(reviewId);
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.reviewToResponse(review)), HttpStatus.OK);
    }

    //상품별 모든 리뷰 조회
    @GetMapping("/findByProduct/{product-id}")
    public ResponseEntity getAllReviewsByProduct(@PathVariable("product-id")long productId){
        List<Review> reviewList = reviewService.getAllReviewsByProduct(productId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.reviewListToResponses(reviewList)), HttpStatus.OK);
    }

    //멤버별 리뷰 조회
    @GetMapping("/findByMember")
    public ResponseEntity getAllReviewsByMember(){
        long memberId = JwtInterceptor.getAuthenticatedMemberId();

        List<Review> reviewList = reviewService.getAllReviewsByMember(memberId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.reviewListToResponses(reviewList)), HttpStatus.OK);
    }

    //리뷰 삭제
    @DeleteMapping("/delete/{review-id}")
    public ResponseEntity deleteReview(@PathVariable("review-id")long reviewId){
        long memberId = JwtInterceptor.getAuthenticatedMemberId();

        reviewService.deleteReview(reviewId, memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
