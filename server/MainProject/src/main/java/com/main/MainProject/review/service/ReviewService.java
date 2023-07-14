package com.main.MainProject.review.service;

import com.main.MainProject.exception.BusinessLogicException;
import com.main.MainProject.exception.ExceptionCode;
import com.main.MainProject.member.entity.Member;
import com.main.MainProject.member.service.MemberService;
import com.main.MainProject.order.entity.Order;
import com.main.MainProject.order.entity.OrderProduct;
import com.main.MainProject.order.service.OrderService;
import com.main.MainProject.product.entity.Product;
import com.main.MainProject.product.service.ProductService;
import com.main.MainProject.review.entity.Review;
import com.main.MainProject.review.repository.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;

    private final MemberService memberService;
    private final ProductService productService;

    private final OrderService orderService;

    public ReviewService(ReviewRepository reviewRepository, MemberService memberService,
                         ProductService productService, OrderService orderService) {
        this.reviewRepository = reviewRepository;
        this.memberService = memberService;
        this.productService = productService;
        this.orderService = orderService;
    }

    //리뷰 생성
    public Review createReview(Review review, long orderId, long productId, long memberId){
        Order findOrder = orderService.findVerficatedOrder(orderId);
        Member findMember = memberService.findVerifiedMember(memberId);
        Product findProduct = productService.findVerifiedProduct(productId);

        orderService.isOrderByMember(findOrder, findMember);
        OrderProduct findOrderProduct = orderService.findOrderProduct(findOrder, findProduct);


        if (findOrderProduct.getReviewstatus() == OrderProduct.Reviewstatus.POSSIBLE_REVIEW) {
            review.setMember(findMember);
            review.setProduct(findProduct);
            findOrderProduct.setReviewstatus(OrderProduct.Reviewstatus.REVIEW_WIITE);
            reviewRepository.save(review);
        }else {
            throw new BusinessLogicException(ExceptionCode.CAN_NOT_WRITE_REVIEW);
        }

        return review;
    }

    //리뷰 수정
    public Review updateReview(long reviewId, long memberId, Review review){
        Member findMember = memberService.findVerifiedMember(memberId);
        Review findReview = findVerifiedReview(reviewId);

        if (findMember != findReview.getMember()){
            new BusinessLogicException(ExceptionCode.YOU_ARE_NOT_WRITER);
        }


        Optional.ofNullable(review.getContent())
                .ifPresent(content ->findReview.setContent(content));

        Optional.ofNullable(review.getEnjoyStatus())
                .ifPresent(enjoyStatus ->findReview.setEnjoyStatus(enjoyStatus));

        Optional.ofNullable(review.getProductPersonalColorStatus())
                .ifPresent(productPersonalColorStatus ->findReview.setProductPersonalColorStatus(productPersonalColorStatus));

        Optional.ofNullable(review.getSizeStatus())
                .ifPresent(sizeStatus ->findReview.setSizeStatus(sizeStatus));

        Optional.ofNullable(review.getProductColorStatus())
                .ifPresent(productColorStatus ->findReview.setProductColorStatus(productColorStatus));

        return reviewRepository.save(findReview);
    }

    public Review voteReview(long reviewId){
        Review review = findVerifiedReview(reviewId);
        review.setVote(review.getVote() + 1);
        return reviewRepository.save(review);
    }

    //개별 리뷰 조회
    public Review getReview(long reviewId){
        return findVerifiedReview(reviewId);
    }

    //상품에 달린 모든 리뷰 조화
    public List<Review> getAllReviewsByProduct(long productId){
        Product findProduct = productService.findVerifiedProduct(productId);
        return reviewRepository.findAllByProduct(findProduct);
    }

    //회원이 작성한 모든 리뷰 조회
    public List<Review> getAllReviewsByMember(long memberId){
        Member findMember = memberService.findVerifiedMember(memberId);
        return reviewRepository.findAllByMember(findMember);
    }

    //리뷰 삭제
    public void deleteReview(long reviewId, long memberId){
        Review findReview = findVerifiedReview(reviewId);
        Member findMember = memberService.findVerifiedMember(memberId);

        if (findMember != findReview.getMember()){
            new BusinessLogicException(ExceptionCode.YOU_ARE_NOT_WRITER);
        }

        reviewRepository.delete(findReview);
    }

    //존재하는 리뷰인지 확인
    private Review findVerifiedReview(long reviewId){
        Optional<Review> optionalReview = reviewRepository.findById(reviewId);
        Review findReview = optionalReview.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND));
        return findReview;
    }

}
