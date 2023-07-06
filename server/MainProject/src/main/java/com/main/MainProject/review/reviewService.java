package com.main.MainProject.review;

import org.springframework.stereotype.Service;

@Service
public class reviewService {

    private final reviewReopository reviewReopository;

    public reviewService(com.main.MainProject.review.reviewReopository reviewReopository) {
        this.reviewReopository = reviewReopository;
    }

    //리뷰 생성
    private void createReview(){
        //구매한 상품 중 배송된 상품인지 확인
    }

    //리뷰 수정
    private void updateReview(){
        
    }

    //개별 리뷰 조회
    private void getReview(){
        
    }

    //상품에 달린 모든 리뷰 조화
    private void getAllReviewsByProduct(){

    }

    //회원이 작성한 모든 리뷰 조회
    private void getAllReviewsByMember(){

    }

    //리뷰 삭제
    private void deleteReview(){
        
    }

    //존재하는 리뷰인지 확인
    private void findVerifiedReview(){

    }

}
