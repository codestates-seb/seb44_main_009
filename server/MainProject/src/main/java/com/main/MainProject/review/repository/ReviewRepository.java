package com.main.MainProject.review.repository;

import com.main.MainProject.member.entity.Member;
import com.main.MainProject.product.entity.Product;
import com.main.MainProject.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findAllByProduct(Product product);
    List<Review> findAllByMember(Member member);
}
