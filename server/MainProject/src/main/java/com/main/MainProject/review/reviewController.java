package com.main.MainProject.review;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/review")
@Slf4j
public class reviewController {

    private final static String REVIEW_DEFAULT_URL = "/review";

    private final reviewService reviewService;
    private final reviewMapper mapper;

    public reviewController(com.main.MainProject.review.reviewService reviewService, reviewMapper mapper) {
        this.reviewService = reviewService;
        this.mapper = mapper;
    }

    //리뷰 생성
    @PostMapping()
    public ResponseEntity createReview(){
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    //리뷰 수정
    @PatchMapping
    public ResponseEntity updateReview(){
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    //개별 리뷰 조회
    @GetMapping
    public ResponseEntity getReview(){
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    //상품별 모든 리뷰 조회
    @GetMapping
    public ResponseEntity getAllReviewsByProduct(){
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    //리뷰 삭제
    @GetMapping
    public ResponseEntity getAllReviewsByMember(){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //리뷰 생성
    @GetMapping
    public ResponseEntity deleteReview(){
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
